import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const width = Dimensions.get('window').width;

export default class Grid extends React.Component {
  render() {
    return (
      <View style={[styles.container, {padding: this.checkContentPadding() }]}>
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
          <View style={{flexDirection:'row', flexWrap: 'wrap', justifyContent:'space-between'}}>
            {
                this.props.data.map((data, i)=>{
                    return(
                        <ImageBackground key={i} imageStyle={{borderRadius:this.checkBorderRadius()}} source={{uri:this.checkImage(data.image)}}
                          style={{
                            height: this.checkHeight(),
                            marginBottom: 4, 
                            width: width/2 - (this.checkContentPadding() + 2), 
                            backgroundColor: this.checkBackgroundColor(),
                            borderRadius: this.checkBorderRadius()
                            }}>
                            <TouchableOpacity onPress={() => this.checkCallback(data)} activeOpacity={0.8}  
                              style={{
                                flex: 1,
                                backgroundColor: this.checkOverlayBackground(), 
                                borderRadius: this.checkBorderRadius(), 
                                alignItems: this.checkItemAlignment(),  
                                justifyContent: this.checkJustify()}}>
                                <Text 
                                  style={{
                                    padding:10, color: 
                                    this.checkTextColor(), 
                                    fontWeight:this.checkWeight(), fontSize: this.props.textSize,
                                    }}>
                                    {data.title}
                                </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    )
                })
            }
            
          </View>
        </ScrollView>
      </View>
    );
  }

  checkContentPadding = () => {
      if(this.props.containerPadding){
        if(this.props.containerPadding > 50){
            return 0;
        }else{
            return this.props.containerPadding;
        }       
      }else{
        return 0;
      }
  }

  checkBorderRadius = () =>{
    return this.props.borderRadius ? this.props.borderRadius : 0;
  }

  checkCallback = (data) =>{
    return this.props.callback ? this.props.callback(data) : alert("Add a callback method");
  }

  checkOverlayBackground = () =>{
    return this.props.overlayBackground ? this.props.overlayBackground : "#00000070";
  }

  checkItemAlignment = () =>{
    return this.props.alignItems ? this.props.alignItems : 'center';
  }

  checkJustify = () =>{
    return this.props.justifyContent ? this.props.justifyContent : 'center';
  }

  checkTextColor = () => {
    return this.props.textColor ? this.props.textColor : 'white';
  }

  checkWeight = () =>{
    return this.props.textWeight ? this.props.textWeight : "normal";
  }

  checkBackgroundColor = () =>{
    return this.props.backgroundColor ? this.props.backgroundColor : "gray";
  }

  checkImage = (image) => {
    return image ? image : "none";
  }

  checkHeight = () =>{
    return this.props.contentHeight ? this.props.contentHeight : 100;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
