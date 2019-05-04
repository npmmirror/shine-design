import {Col as ColComponent, Row as RowComponent} from './components/Grid';
import {Bar as BarComponent, Progress as ProgressComponent} from './components/ProgressBar';
import './style/index.scss';

/** 栅格行 */
export const Row = RowComponent;
/** 栅格列 */
export const Col = ColComponent;
/** 进度条容器 */
export const Progress = ProgressComponent;
/** 进度条项 */
export const Bar = BarComponent;
/** 徽章 */
export {default as Badge} from './components/Badge';
/** 表单控制 */
export {default as Form} from './components/Form';
/** 输入框 */
export {default as Input} from './components/Input';

export {default as TextArea} from './components/TextArea';

