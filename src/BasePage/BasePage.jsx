/*
 * A32NX
 * Copyright (C) 2020 FlyByWire Simulations and its contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react'

const McduLabels = {
    L0: {
        text: '',
        class: 'text__small__left__label',
        color: 'white',
    },
    L1: {
        text: '',
        class: 'text__small__left__label',
        color: 'white',
    },
    L2: {
        text: '',
        class: 'text__small__left__label',
        color: 'white',
    },
    L3: {
        text: '',
        class: 'text__small__left__label',
        color: 'white',
    },
    L4: {
        text: '',
        class: 'text__small__left__label',
        color: 'white',
    },
    L5: {
        text: '',
        class: 'text__small__left__label',
        color: 'white',
    },
    R0: {
        text: 'SELECT\xa0',
        class: 'text__small__right__label',
        color: 'white',
    },
    R1: {
        text: '',
        class: 'text__small__right__label',
        color: 'amber',
    },
    R2: {
        text: '',
        class: 'text__small__right',
        color: 'white',
    },
    R3: {
        text: '',
        class: '',
        color: '',
    },
    R4: {
        text: '',
        class: 'text__small__right__label',
        color: 'inop',
    },
    R5: {
        text: '',
        class: 'text__small__right__label',
        color: 'white',
    },
};

const McduText = {
    L0: {
        text: '',
        class: 'text__small__left',
        color: 'amber',
    },
    L1: {
        text: '',
        class: 'text__small__left',
        color: 'white',
    },
    L2: {
        text: '',
        class: 'text__small__left',
        color: 'amber',
    },
    L3: {
        text: '',
        class: 'text__small__left',
        color: 'white',
    },
    L4: {
        text: '',
        class: 'text__small__left',
        color: 'white',
    },
    L5: {
        text: '',
        class: 'text__small__left',
        color: 'white',
    },
    R0: {
        text: '',
        class: 'text__small__right',
        color: 'amber',
    },
    R1: {
        text: '',
        class: 'text__small__right',
        color: 'AMBER',
    },
    R2: {
        text: '',
        class: 'text__small__right',
        color: 'white',
    },
    R3: {
        text: '',
        class: 'text__small__right',
        color: 'white',
    },
    R4: {
        text: '',
        class: 'text__small__right',
        color: 'white',
    },
    R5: {
        text: '',
        class: 'text__small__right',
        color: 'cyan',
    },
}

const FieldObject = (props) => {
    const {
        objectText,
        objectClass,
        objectColor,
    } = props;
    return (
        <text className={objectClass}>
            <text className={objectColor}>
                {objectText}
            </text>
        </text>
    );
};

FieldObject.propTypes = {
    objectText: PropTypes.string.isRequired,
    objectClass: PropTypes.string,
    objectColor: PropTypes.string,
};

const LineObject = (props) => {
    const {
        leftLabel,
        rightLabel,
        leftField,
        rightField,
    } = props;
    return (
        <div>
            <div>
                <FieldObject
                    objectText={leftLabel.text}
                    objectClass={leftLabel.class}
                    objectColor={leftLabel.color}
                />
                <FieldObject
                    objectText={rightLabel.text}
                    objectClass={rightLabel.class}
                    objectColor={rightLabel.color}
                />
            </div>
            <div>
                <FieldObject
                    objectText={leftField.text}
                    objectClass={leftField.class}
                    objectColor={leftField.color}
                />
                <FieldObject
                    objectText={rightField.text}
                    objectClass={rightField.class}
                    objectColor={rightField.color}
                />
            </div>
        </div>
    );
};

LineObject.propTypes = {
    leftLabel: PropTypes.shape({
        text: PropTypes.string,
        class: PropTypes.string,
        color: PropTypes.string,
    }),
    rightLabel: PropTypes.shape({
        text: PropTypes.string,
        class: PropTypes.string,
        color: PropTypes.string,
    }),
    leftField: PropTypes.shape({
        text: PropTypes.string,
        class: PropTypes.string,
        color: PropTypes.string,
    }),
    rightField: PropTypes.shape({
        text: PropTypes.string,
        class: PropTypes.string,
        color: PropTypes.string,
    }),

};

const BasePage = (props) => {
    const {
        labels,
        data,
    } = props;
    return (
        <div className="bg">
            <LineObject
                leftLabel={labels.L0}
                rightLabel={labels.R0}
                leftField={data.L0}
                rightField={data.R0}
            />
            <LineObject
                leftLabel={labels.L1}
                rightLabel={labels.R1}
                leftField={data.L1}
                rightField={data.R1}
            />
            <LineObject
                leftLabel={labels.L2}
                rightLabel={labels.R2}
                leftField={data.L2}
                rightField={data.R2}
            />
            <LineObject
                leftLabel={labels.L3}
                rightLabel={labels.R3}
                leftField={data.L3}
                rightField={data.R3}
            />
            <LineObject
                leftLabel={labels.L4}
                rightLabel={labels.R4}
                leftField={data.L4}
                rightField={data.R4}
            />
            <LineObject
                leftLabel={labels.L5}
                rightLabel={labels.R5}
                leftField={data.L5}
                rightField={data.R5}
            />
        </div>
    );
};

BasePage.propTypes = {
    labels: PropTypes.objectOf(PropTypes.shape(McduLabels)),
    data: PropTypes.objectOf(PropTypes.shape(McduText)),
};

export { BasePage, McduLabels, McduText } ;
