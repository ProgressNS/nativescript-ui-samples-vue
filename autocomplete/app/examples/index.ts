import AsyncData from './AsyncData/AsyncData';
import Events from './Events/Events';
import GettingStarted from './GettingStarted/GettingStarted';
import CompletionModes from './Completion-modes/Completion-modes';
import SuggestModes from './Suggest-modes/Suggest-modes';
import Customization from './Customization/Customization';
import DisplayModes from './Display-modes/Display-modes';
import Hint from './Hint/Hint';
import TokenLayouts from './Token-Layouts/Token-Layouts';
import PreselectedTokens from './Preselected-tokens/Preselected-tokens';
import ReadOnly from './ReadOnly/ReadOnly';
import CustomToken from './CustomToken/CustomToken';
import CssStyle from './CssStyle/CssStyle';

export const getExamples = () => {
  return [
    GettingStarted,
    CompletionModes,
    DisplayModes,
    TokenLayouts,
    SuggestModes,
    Customization,
    Events,
    AsyncData,
    ReadOnly,
    Hint,
    PreselectedTokens,
    CustomToken,
    CssStyle,
  ];
};
