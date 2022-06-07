import DbSelectionSection from './DbSelectionSection'
import NoActivity from './NoActivity'
import DbToggle from './DbToggle'
import DbSelect from './DbSelect'
import DbScorecard from './DbScorecard'
import DbChart from './DbChart'
import DemoNotification from './DemoNotification'
import useDbPage from '../hooks/useDbPage'
import { useMediaQuery } from '@mantine/hooks'
import ShakingSatsStats from './ShakingSatsStats'
import { Paper } from '@mantine/core'


const DbContentSection = ({ details, slug }) => {

    const isMobile = useMediaQuery('(max-width: 755px)');

    const {
        familyKey, setFamilyKey,
        parentKey, setParentKey,
        childKey, setChildKey,
        noActivity,
        toggle, menu,
        dbToggleData, dbSelectData,
        getTitle, endDate, currentValue, change, chartFormat,
        series, categories,
        price,
        lastEntry
    } = useDbPage(details, slug)


    return (
        <>
            <Paper
                shadow='sm'
                radius='md'
                withBorder
                padding='xl'
            >
                <DbSelectionSection
                    toggle={toggle}
                    menu={menu}
                >
                    {
                        dbToggleData &&
                        <DbToggle
                            data={dbToggleData}
                            parentKey={parentKey}
                            setParentKey={setParentKey}
                        />
                    }
                    {
                        dbSelectData &&
                        <DbSelect
                            data={dbSelectData}
                            childKey={menu === 'parent' ? parentKey : childKey}
                            setChildKey={menu === 'parent' ? setParentKey : setChildKey}
                        />
                    }
                </DbSelectionSection>
                {
                    noActivity 
                    ? <NoActivity />
                    : <>
                        <DbScorecard
                            endDate={endDate}
                            title={getTitle()}
                            val={currentValue}
                            change={change}
                            isMobile={isMobile}
                            format={chartFormat}
                            price={price}
                            familyKey={familyKey}
                        />
                        <DbChart 
                            categories={categories}
                            series={series}
                            chartFormat={chartFormat}
                        />
                    </>
                }
            </Paper>
            <ShakingSatsStats
                stats={lastEntry.shakingSats}
                familyKey={familyKey}
            />
        </>
    )
}

export default DbContentSection