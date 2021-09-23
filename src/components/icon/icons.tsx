import type { NameType } from './types';
import Home from './svgs/Home';
import HomeActive from './svgs/HomeActive';
import UserSettings from './svgs/UserSettings';
import UserSettingsActive from './svgs/UserSettingsActive';
import Information from './svgs/Information';
import InformationActive from './svgs/InformationActive';
import Logo from './svgs/Logo';
import Star from './svgs/Star';
import Card from './svgs/Card';
import Copy from './svgs/Copy';
import Error from './svgs/Error';
import ChevronLeft from './svgs/ChevronLeft';
import ChevronRight from './svgs/ChevronRight';
import FileQuestion from './svgs/FileQuestion';
import Pay from './svgs/Pay';
import PayActive from './svgs/PayActive';
import Question from './svgs/Question';
import QuestionActive from './svgs/QuestionActive';
import Circle from './svgs/Circle';
import Warning from './svgs/Warning';
import WarningRound from './svgs/WarningRound';
import HidePassword from './svgs/HidePassword';
import ShowPassword from './svgs/ShowPassword';
import Share from './svgs/Share';

const IconMap = {
  Home,
  HomeActive,
  UserSettings,
  UserSettingsActive,
  Information,
  InformationActive,
  Logo,
  Star,
  Card,
  Copy,
  Error,
  ChevronLeft,
  ChevronRight,
  FileQuestion,
  Pay,
  PayActive,
  Question,
  QuestionActive,
  Circle,
  Warning,
  WarningRound,
  HidePassword,
  ShowPassword,
  Share,
};

export const iconNames = Object.keys(IconMap);

// @ts-ignore
export const getIcon = (name: NameType) => IconMap[name];
