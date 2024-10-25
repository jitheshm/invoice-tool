import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void;
export type onTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => void;
export type OnClick = (event: MouseEvent<HTMLButtonElement>) => void;