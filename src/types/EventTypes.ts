import { ChangeEvent } from "react";

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void;
export type onTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => void;