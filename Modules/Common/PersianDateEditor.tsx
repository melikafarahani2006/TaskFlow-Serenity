import {
    EditorProps,
    StringEditor
} from '@serenity-is/corelib';

import '@majidh1/jalalidatepicker';
import '@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css';


let watcherStarted = false;
let editorCounter = 0;


function startJalaliDatePicker() {

    if (watcherStarted)
        return;

    const jdp = (window as any).jalaliDatepicker;

    if (!jdp)
        return;

    jdp.startWatch({
        date: true,
        time: false,

        selector: 'input[data-jdp]',

        targetValueInput: 'attr',
        targetValueType: 'attr',

        showTodayBtn: true,
        showEmptyBtn: true,

        position: 'right'
    });

    watcherStarted = true;
}


function gregorianToPersian(value?: string): string {

    if (!value)
        return '';

    // Serenity ممکنه تاریخ رو این شکلی بده:
    // 2026-08-16
    // یا:
    // 2026-08-16T00:00:00

    const match =
        /^(\d{4})-(\d{2})-(\d{2})/.exec(value);

    if (!match)
        return '';

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);

    const date = new Date(
        Date.UTC(year, month - 1, day)
    );

    const parts =
        new Intl.DateTimeFormat(
            'en-US-u-ca-persian',
            {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                timeZone: 'UTC'
            }
        ).formatToParts(date);

    const jy =
        parts.find(x => x.type === 'year')?.value ?? '';

    const jm =
        parts.find(x => x.type === 'month')?.value ?? '';

    const jd =
        parts.find(x => x.type === 'day')?.value ?? '';

    return `${jy}/${jm}/${jd}`;
}


export class PersianDateEditor
    extends StringEditor {

    static override[Symbol.typeInfo] =
        this.registerEditor(
            'TaskFlowSerenity.Common.PersianDateEditor'
        );

    private gregorianInput: HTMLInputElement;

    constructor(props: EditorProps<any>) {

        super(props);

        editorCounter++;

        const input =
            this.domNode as HTMLInputElement;

        // visible Jalali input
        input.setAttribute('data-jdp', '');
        input.setAttribute('data-jdp-only-date', '');

        input.placeholder = '1405/05/25';
        input.dir = 'ltr';

        // اجازه ورود دستی نمی‌دیم
        // تا شمسی/میلادی خراب نشه
        input.readOnly = true;


        // hidden Gregorian input
        this.gregorianInput =
            document.createElement('input');

        this.gregorianInput.type = 'hidden';

        this.gregorianInput.id =
            `gregorian-date-${editorCounter}`;


        input.setAttribute(
            'data-jdp-target-value-input',
            `#${this.gregorianInput.id}`
        );

        input.setAttribute(
            'data-jdp-target-value-type',
            'gregorian'
        );


        input.insertAdjacentElement(
            'afterend',
            this.gregorianInput
        );


        // وقتی دکمه خالی کردن تقویم زده شد
        input.addEventListener(
            'jdp:change',
            () => {

                if (!input.value)
                    this.gregorianInput.value = '';
            }
        );


        startJalaliDatePicker();
    }


    protected override get_value(): string {

        return this.gregorianInput.value || '';
    }


    protected override set_value(
        value: string
    ): void {

        const input =
            this.domNode as HTMLInputElement;

        // Task جدید
        if (!value) {

            input.value = '';
            this.gregorianInput.value = '';

            return;
        }

        // مقدار اصلی میلادی برای Save
        this.gregorianInput.value =
            value.substring(0, 10);

        // مقدار نمایشی شمسی
        input.value =
            gregorianToPersian(value);
    }
}