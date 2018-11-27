import Autocomplete from './Autocomplete';
import Editors from './Editors';
import EditorsMarkup from './EditorsMarkup';
import EditorsStyle from './EditorsStyle';
import GettingStarted from './GettingStarted';
import Groups from './Groups';
import Layouts from './layouts';
import Properties from './Properties';
import Validation from './Validation';
import ValidationEvents from './ValidationEvents';
import ValidationMarkup from './ValidationMarkup';
import ValidationModes from './ValidationModes';

export const getExamples = () => {
  return [
    GettingStarted,
    Properties,
    Editors,
    EditorsMarkup,
    EditorsStyle,
    Autocomplete,
    Validation,
    ValidationEvents,
    ValidationModes,
    ValidationMarkup,
    Groups,
    Layouts,
  ];
};
