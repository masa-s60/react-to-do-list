import { Dispatch, SetStateAction } from "react";

export interface typeTaskList {
  comment: string | number,
  status: '作業中' | '完了'
}

export type checkedButtonStatus = 'すべて' | '作業中' | '完了';

export type typeContext = {
  checkedButton: checkedButtonStatus,
  changeButton: Dispatch<SetStateAction<checkedButtonStatus>>,
  tasks: Partial<typeTaskList>[],
  pushTask: Dispatch<SetStateAction<Partial<typeTaskList>[]>>,
  addTask: () => void,
}

export type inputTaskStatus = string | undefined;

export type useStateProps = {
  inputTask: inputTaskStatus;
  setTask: Dispatch<SetStateAction<inputTaskStatus>>;
}

// type taskListArray<T> = Record<'comment' | 'status', T | ('作業中' | '完了')>;