import type {App, Component} from 'vue';
import Popover from '../lib/popover/popover.vue';
import Button from '../lib/Button.vue';
import Input from '../lib/input/Input.vue';
import InputPassword from '../lib/input/InputPassword.vue';
import InputTextArea from '../lib/input/textArea.vue';
import Switch from '../lib/Switch.vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import Row from '../lib/Grid/row.vue';
import Col from '../lib/Grid/col.vue';
import Typography from '../lib/typography/copyEditParagraph.vue';
import Dialog from '../lib/Dialog.vue';
import Collapse from '../lib/Collapse/collapse.vue';
import CollapseItem from '../lib/Collapse/collapse-item.vue';
import AlertComponent from '../lib/Alert/alert.vue';
import CheckBox from '../lib/CheckBox/CheckBox.vue';
import CheckBoxGroup from '../lib/CheckBox/CheckBoxGroup.vue';
import Carousel from '../lib/Carousel/Carousel.vue';
import CarouselItem from '../lib/Carousel/CarouselItem.vue';
import BackTop from '../lib/BackTop/BackTop.vue';
import EInputNumber from '../lib/InputNumber/InputNumber.vue';
import ESelect from '../lib/Select/Select.vue';
import EOption from '../lib/Select/Option.vue';
import EContainer from '../lib/Container/Container.vue';
import EAside from '../lib/Container/Aside.vue';
import EHeader from '../lib/Container/Header.vue';
import EMain from '../lib/Container/Main.vue';
import EFooter from '../lib/Container/Footer.vue';
import ETag from '../lib/Tag/Tag.vue';
import Demo from './common/Demo.vue';
import ApiTable from './common/ApiTableContainer.vue';
import ComponentDesc from './common/ComponentDesc.vue';

const components: { [propName: string]: Component } = {
    EPopover: Popover,
    EButton: Button,
    EInput: Input,
    EInputPassword: InputPassword,
    EInputTextArea: InputTextArea,
    ESwitch: Switch,
    ETabs: Tabs,
    ETab: Tab,
    ERow: Row,
    ECol: Col,
    ETypography: Typography,
    EDialog: Dialog,
    ECollapse: Collapse,
    ECollapseItem: CollapseItem,
    EAlert: AlertComponent,
    ECheckBox: CheckBox,
    ECheckBoxGroup: CheckBoxGroup,
    ECarousel: Carousel,
    ECarouselItem: CarouselItem,
    EBackTop: BackTop,
    ESelect,
    EOption,
    EInputNumber,
    Demo,
    ApiTable,
    ComponentDesc,
    EContainer,
    EAside,
    EHeader,
    EMain,
    EFooter,
    ETag
};
export default {
    install: (Vue: App) => {
        for (const key in components) {
            Vue.component(key, components[key]);
        }

    }
};