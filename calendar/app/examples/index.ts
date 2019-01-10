import CellStyling from './CellStyling';
import DayView from './DayView';
import EventsViewModes from './EventsViewModes';
import GettingStarted from './GettingStarted';
import Localization from './Localization';
import PopulatingWithData from './PopulatingWithData';
import ProgrammaticControl from './ProgrammaticControl';
import SelectionModes from './SelectionModes';
import TransitionModes from './TransitionModes';
import ViewModes from './ViewModes';

export const getExamples = () => {
  return [
    GettingStarted,
    Localization,
    PopulatingWithData,
    ProgrammaticControl,
    ViewModes,
    SelectionModes,
    TransitionModes,
    CellStyling,
    EventsViewModes,
    DayView
  ];
};
