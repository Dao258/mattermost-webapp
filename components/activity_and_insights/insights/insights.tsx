// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, {memo, useState, useCallback, useMemo} from 'react';

import InsightsHeader from './insights_header/insights_header';
import {localizeMessage} from 'utils/utils';

import './../activity_and_insights.scss';

const Insights = () => {
    const [filterType, setFilterType] = useState('my');
    const [timeFrame, setTimeFrame] = useState({
        value: '1_day',
        label: localizeMessage('insights.timeFrame.today', 'Today'),
    });

    const setFilterTypeTeam = useCallback(() => {
        setFilterType('team');
    }, []);

    const setFilterTypeMy = useCallback(() => {
        setFilterType('my');
    }, []);

    const setTimeFrameValue = useCallback((value) => {
        setTimeFrame(value);
    }, [])

    return (
        <>
            <InsightsHeader
                filterType={filterType}
                setFilterTypeTeam={setFilterTypeTeam}
                setFilterTypeMy={setFilterTypeMy}
                timeFrame={timeFrame}
                setTimeFrame={setTimeFrameValue}
            />
        </>
    );
};

export default memo(Insights);
