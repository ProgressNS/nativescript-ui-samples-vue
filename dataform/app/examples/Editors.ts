import * as frameModule from 'tns-core-modules/ui/frame';
// >> dataform-editor-vue
import { TicketOrder, getMovies, Movie, MovieConverter } from '../data';

const description = 'Editors';
const movies = getMovies();

export default {
  name: 'Editors',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadDataForm
      :source="ticket"
      :metadata="ticketMetadata">
    </RadDataForm>
  </Page>
  `,
  data () {
    return {
      title: description,
      ticket: new TicketOrder(),
      ticketMetadata: {
        'isReadOnly': false,
        'commitMode': 'Immediate',
        'validationMode': 'Immediate',
        'propertyAnnotations':
        [
          {
            'name': 'movie',
            'displayName': 'Movie Name',
            'index': 0,
            'editor': 'Picker',
            'valuesProvider': movies.map((value: Movie) => value.name),
            'converter': new MovieConverter(movies),
          },
          {
            'name': 'date',
            'displayName': 'Date',
            'index': 1,
            'editor': 'DatePicker',
          },
          {
            'name': 'time',
            'displayName': 'Time',
            'index': 2,
            'editor': 'TimePicker',
          },
          {
            'name': 'type',
            'displayName': 'Type',
            'index': 3,
            'editor': 'SegmentedEditor',
            'valuesProvider': ['2D', '3D'],
          },
          {
            'name': 'price',
            'displayName': 'Price',
            'index': 4,
            'editor': 'Decimal',
            'readOnly': true,
          },
          {
            'name': 'numberOfTickets',
            'displayName': 'Number Of Tickets',
            'index': 5,
            'editor': 'Stepper',
            'editorParams': {
              'minimum': 0,
              'maximum': 20,
              'step': 2,
            }
          },
          {
            'name': 'contactName',
            'displayName': 'Contact Name',
            'index': 6,
            'editor': 'Text',
          },
          {
            'name': 'contactPhone',
            'displayName': 'Contact Phone',
            'index': 7,
            'editor': 'Phone',
          },
          {
            'name': 'contactEmail',
            'displayName': 'Contact Email',
            'index': 8,
            'editor': 'Email',
          },
          {
            'name': 'agreeTerms',
            'displayName': 'I Agree with Terms',
            'index': 9,
            'editor': 'Switch',
          },
        ]
      }
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    },
  }
};
// << dataform-editor-vue