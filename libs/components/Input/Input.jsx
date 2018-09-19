/**
 * @Component 输入组件 - Input
 * @Type 表单
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/17 下午6:45
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
// 组件依赖

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        label: PropTypes.node,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        type: PropTypes.string,
        placeholder: PropTypes.node,
        helper: PropTypes.node,
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        multiple: PropTypes.bool,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            label: PropTypes.node,
            isChecked: PropTypes.bool,
            attributes: PropTypes.object
        })),
        attributes: PropTypes.object,
        inputStyle: PropTypes.oneOf(['pill', 'square', 'normal']),
        isAir: PropTypes.bool,
        isSolid: PropTypes.bool,
        size: PropTypes.oneOf(['sm', 'lg', 'normal'])
    };

    static defaultProps = {
        multiple: false,
        options: [],
        inputStyle: 'normal',
        isAir: false,
        isSolid: false,
        size: 'normal'
    };

    render() {
        const {
            label,
            id = 'sh-' + uuidv4(),
            type,
            placeholder,
            helper,
            defaultValue,
            name,
            options,
            multiple,
            disabled,
            readonly,
            attributes,
            inputStyle,
            isAir,
            isSolid,
            size
        } = this.props;

        let _inputTyp = null;

        switch (type) {
            case 'select':
                _inputTyp = 'selectType';
                break;
            case 'textarea':
                _inputTyp = 'textareaType';
                break;
            case 'static':
                _inputTyp = 'staticType';
                break;
            default:
                _inputTyp = 'inputType'
        }

        const _className = classNames(
            'form-control',
            'sh-input',
            {
                [`sh-input--${inputStyle}`]: !_.isEqual(inputStyle, 'normal'),
                'sh-input--air': isAir,
                'sh-input--solid': isSolid,
                [`form-control-${size}`]: !_.isEqual(size, 'normal')
            }
        );

        return (
            <Fragment>
                <div className={
                    classNames('form-group', 'sh-form__group')
                }>
                    {
                        _.isString(label) && (<label htmlFor={id}>{label}</label>)
                    }
                    {_.isEqual(_inputTyp, 'selectType') && (
                        <Fragment>
                            <select
                                id={id}
                                className={_className}
                                name={name}
                                disabled={disabled}
                                aria-readonly={readonly}
                                multiple={multiple}
                                {...attributes}
                            >
                                {
                                    _.isArray(options) && options.map((item) => <option value={item.value}
                                                                                        defaultChecked={item.isChecked}>{item.label}</option>)
                                }
                            </select>
                        </Fragment>
                    )}
                    {
                        _.isEqual(_inputTyp, 'textareaType') && (
                            <Fragment>
                                <textarea
                                    id={id}
                                    className={_className}
                                    name={name}
                                    disabled={disabled}
                                    aria-readonly={readonly}
                                    placeholder={placeholder}
                                    defaultValue={defaultValue}
                                    {...attributes}
                                />
                            </Fragment>
                        )
                    }
                    {
                        _.isEqual(_inputTyp, 'staticType') && (
                            <Fragment>
                                <p className={
                                    classNames('form-control-static')
                                }>{defaultValue}</p>
                            </Fragment>
                        )
                    }
                    {
                        _.isEqual(_inputTyp, 'inputType') && (
                            <input
                                id={id}
                                type={type}
                                className={_className}
                                name={name}
                                disabled={disabled}
                                aria-readonly={readonly}
                                placeholder={placeholder}
                                defaultValue={defaultValue}
                                {...attributes}
                            />
                        )
                    }
                    {
                        _.isString(helper) && (<span className="sh-form__help">{helper}</span>)
                    }
                </div>
            </Fragment>
        );
    }
}