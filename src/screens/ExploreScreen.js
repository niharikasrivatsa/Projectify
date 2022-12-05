import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';

import FilterButtons from '../components/MultiSelelectFilter';
import ExploreProjectCard from '../components/ExploreProjectCard';

export default class ExploreScreen extends React.Component {
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
              placeholder="Search for projects"
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
                "Recent", "Saved", "My Skills", "My Role"
              ]} />
            </View>

            <ExploreProjectCard 
              author={"@Maya"}
              title={"Book Website"}
              imageLink={"../assets/images/sampleProjectPic.png"}
              tags={["Web", "HTML", "CSS"]}
              description={"I want to create a website that has book pdfs for users..."}
            />
            <ExploreProjectCard 
              author={"@Aashi.K"}
              title={"Discord Bot"}
              imageLink={"../assets/images/sampleProjectPic.png"}
              tags={["Java Script", "Discord"]}
              description={"Working on a Discord Bot that users can play tic tac toe.."}
            />
            <ExploreProjectCard 
              author={"@Emily_Smith"}
              title={"StudyBuddy"}
              imageLink={"../assets/images/sampleProjectPic.png"}
              tags={["Web", "HTML", "CSS"]}
              description={"Working on a Discord Bot that users can play tic tac toe..."}
            />
            <ExploreProjectCard 
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

