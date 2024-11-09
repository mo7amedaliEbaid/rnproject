import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useState } from 'react'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

const jobTypes=["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJonType, setActiveJobType]=useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello Mohamed
        </Text>
        <Text style={styles.welcomeMessage}>
          Find your perfect job
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
            <FlatList
            data={jobTypes}
            renderItem={({ item })=>(
              <TouchableOpacity
              style={styles.tab(activeJonType, item)}
              onPress={()=>{
                setActiveJobType(item);
                router.push('/search/${item}')
              }}
              >
                <Text style={styles.tabText(activeJonType, item)}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item}
            contentContainerStyle={{
              columnGap:SIZES.small
            }}
            horizontal
            />
      </View>
    </View>
  )
}

export default Welcome