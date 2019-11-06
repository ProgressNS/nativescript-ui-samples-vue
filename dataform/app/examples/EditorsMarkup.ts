import { Frame } from 'tns-core-modules/ui/frame';
import { TicketOrder, getMovies, Movie, MovieConverter } from '../data';

const description = 'Editors using markup';
const movies = getMovies();

export default {
  name: 'EditorsMarkup',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <RadDataForm
      :source="ticket"
      :metadata="ticketMetadata">
      <TKEntityProperty v-tkDataFormProperty
                        name="movie"
                        displayName="Movie Name"
                        index="0"
                        :converter="movieConverter"
                        :valuesProvider="movieNames">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="date" index="1">
        <TKPropertyEditor v-tkEntityPropertyEditor type="DatePicker"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="time" index="2">
        <TKPropertyEditor v-tkEntityPropertyEditor type="TimePicker"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty
                        name="type"
                        displayName="Type"
                        index="3"
                        valuesProvider="2D, 3D">
        <TKPropertyEditor v-tkEntityPropertyEditor type="SegmentedEditor"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="price" index="4" readOnly="true">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Decimal"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="numberOfTickets" displayName="Number of Tickets" index="5">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Stepper">
          <TKPropertyEditorParams v-tkEditorParams minimum="0" maximum="100" step="2"></TKPropertyEditorParams>
        </TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="contactName" displayName="Contact Name" index="6">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Text"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="contactPhone" displayName="Contact Phone" index="7">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Phone"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="contactEmail" displayName="Contact Email" index="8">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Email"></TKPropertyEditor>
      </TKEntityProperty>
      <TKEntityProperty v-tkDataFormProperty name="agreeTerms" displayName="I Agree with Terms" index="9">
        <TKPropertyEditor v-tkEntityPropertyEditor type="Switch"></TKPropertyEditor>
      </TKEntityProperty>
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
      }
    };
  },
  computed: {
    movieNames () {
      return movies.map((value: Movie) => value.name);
    },
    movieConverter () {
      return new MovieConverter(movies);
    },
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  }
};
