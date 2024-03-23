export interface IConfig extends IConfigForm{
    id: number;
}
export interface IConfigForm{
    scheduled_time: string | Date;
    scheduled_message: string;
    delayed_time: string | Date;
    delayed_message: string;
}