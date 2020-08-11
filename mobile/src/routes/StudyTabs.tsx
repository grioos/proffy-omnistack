import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
    return (
        <Navigator>
            <Screen name="" component={TeacherList} />
            <Screen name="" component={Favorites} />
        </Navigator>
    )
}