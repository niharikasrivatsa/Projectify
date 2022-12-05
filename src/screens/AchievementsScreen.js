import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import FilterButtons from '../components/MultiSelelectFilter';
import AchievementsProjectCard from '../components/AchievementsProjectCard';

export default class AchievementssScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F4F6F9',
        }}>
          <ScrollView>
            <SearchBar
              placeholder="Search for success stories"
              onChangeText={this.updateSearch}
              value={search}
              inputStyle={{
                backgroundColor: '#F4F6F9', 
                fontFamily: 'Nunito_400Regular',
                fontSize: 14,
              }}
              containerStyle={{
                backgroundColor: '#F4F6F9', 
                borderBottomWidth: 0,
                borderTopWidth: 0,
              }}
              placeholderTextColor={'#928F8F'}
              inputContainerStyle={{
                backgroundColor: '#F4F6F9',
                borderRadius: 6,
                borderColor: '#2C2C2C',
                borderWidth: 0.7,
                borderBottomWidth: 0.7,
                marginHorizontal: 25,
                width: 320,
                height: 40,
                marginTop: 10
              }}
            />
            <View style = {{ marginLeft: 28}}>
              <FilterButtons
              options={[
                "Recent", "Liked", "My Stories"
              ]} />
            </View>

            <AchievementsProjectCard 
              author={"@Maya"}
              collaborators={["@Emily_Smith", "@ClaireP"]}
              title={"Book Website"}
              imageLink={"../assets/images/sampleProjectPic.png"}
              tags={["Web", "HTML", "CSS"]}
              description={"I want to create a website that has book pdfs for users..."}
            />
            <AchievementsProjectCard 
              author={"@Aashi.K"}
              collaborators={["@JennyA", "@Rhea.P", "Jill"]}
              title={"Discord Bot"}
              imageLink={"../assets/images/sampleProjectPic.png"}
              tags={["Java Script", "Discord"]}
              description={"Working on a Discord Bot that users can play tic tac toe.."}
            />
            <AchievementsProjectCard 
              author={"@Emily_Smith"}
              collaborators={["@Maya", "@Aashi.K"]}
              title={"StudyBuddy"}
              imageLink={"../assets/images/sampleProjectPic.png"}
              tags={["Web", "HTML", "CSS"]}
              description={"Working on a Discord Bot that users can play tic tac toe..."}
            />
            <AchievementsProjectCard 
              author={"@Maya"}
              title={"Book Website"}
              imageLink={"../assets/images/sampleProjectPic.png"}
              tags={["Web", "HTML", "CSS"]}
              description={"I want to create a website that has book pdfs for users..."}
            />


          </ScrollView>
      </SafeAreaView>
    );
  }
}

