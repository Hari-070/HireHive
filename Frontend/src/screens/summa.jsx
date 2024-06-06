import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, Padding } from "../../GlobalStyles";
import SafeAreaView from "react-native-safe-area-view";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: "always", bottom: "always" }}
    >
      <View>
        <View style={[styles.homepage]}>
          {/* <View style={styles.homeIndicator}>
            <View style={[styles.homeIndicator1, styles.homeLayout]} />
          </View> */}
          {/* header */}
          {/* <View style={styles.header}>
            <Image
              style={[styles.profileImageIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../main_assets/profile-image.png")}
            />
            <Text style={styles.hireHive}>Hire Hive</Text>
            <Image
              style={styles.iconmore}
              contentFit="cover"
              source={require("../main_assets/iconmore.png")}
            />
          </View> */}
          {/* This is the search bar */}
          {/* <View style={[styles.inputField, styles.inputFieldPosition]}>
            <TextInput
              style={[styles.label, styles.labelTypo]}
              numberOfLines={1}
              placeholder="Type to search"
            />
            <Image
              style={[styles.searchIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../main_assets/search.png")}
            />
          </View> */}

          {/* Main Scrollable screen */}
          <View style={[styles.socialMediaPost, styles.dashboardBg]}>
            <Image
              style={[styles.avatarIcon, styles.avatarIconPosition]}
              contentFit="cover"
              source={require("../main_assets/avatar.png")}
            />
            <View style={[styles.postContent, styles.avatarIconPosition]}>
              <View style={styles.postHeader}>
                <View style={styles.metaData}>
                  <View style={styles.nameGroup}>
                    <Text
                      style={styles.helena}
                      numberOfLines={1}
                    >{`Helena `}</Text>
                    <Text
                      style={[styles.inGroupName, styles.minAgoTypo]}
                      numberOfLines={1}
                    >
                      in Group name
                    </Text>
                  </View>
                  <Text
                    style={[styles.minAgo, styles.minAgoTypo]}
                    numberOfLines={1}
                  >
                    3 min ago
                  </Text>
                </View>
                <Image
                  style={[styles.iconmore1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../main_assets/iconmore1.png")}
                />
              </View>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../main_assets/image.png")}
              />
              <View style={styles.comment}>
                <Text
                  style={[styles.postDescription, styles.labelTypo]}
                  numberOfLines={1}
                >
                  Post description
                </Text>
                <View style={styles.postActions} />
              </View>
            </View>
          </View>
          {/*This is the bottom navi */}
          <View style={[styles.bottomTabBar]}>
            {/* <View style={styles.tabs}> */}
            <View style={styles.tabBarItem}>
              <Image
                contentFit="cover"
                source={require("../main_assets/iconhome.png")}
              />
              <Text>Home</Text>
            </View>
            {/* <View style={[styles.tabItemPosition]}>
                <Text style={[styles.browse, styles.homeTypo]}>Browse</Text>

                <Image
                  style={[styles.iconhome, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../main_assets/iconsearch.png")}
                />
              </View>
              <View style={[styles.tabBarItem2, styles.tabItemPosition]}>
                <Image
                  style={[styles.iconhome, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../main_assets/iconradio.png")}
                />
                <Text style={[styles.connect, styles.homeTypo]}>Connect</Text>
              </View>
              <View style={[styles.tabBarItem3, styles.tabItemPosition]}>
                <Text style={[styles.library, styles.homeTypo]}>Library</Text>
                <Image
                  style={[styles.iconhome, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../main_assets/iconlibrary.png")}
                />
              </View> */}
          </View>
          <View style={[styles.homeIndicator2, styles.homeLayout]}>
            <View style={[styles.homeIndicator3, styles.homeLayout]} />
          </View>
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  iconhome: {
    marginBottom: 20,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  bottomTabBar: {
    // display:"flex",
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  tabBarItem: {
    // flex:1,
    // flexDirection:"column",
  },
  dashboardBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  homeLayout: {
    height: 5,
    width: 134,
    left: "50%",
    position: "absolute",
  },

  // homeTypo: {
  //   marginLeft: -14,
  //   textAlign: "center",
  //   fontWeight: "500",
  //   letterSpacing: 0,
  //   fontSize: FontSize.size_3xs,
  //   bottom: 2,
  //   color: Color.colorBlack,
  //   left: "50%",
  //   position: "absolute",
  // },
  iconLayout: {
    height: 24,
    width: 24,
  },
  tabItemPosition: {
    opacity: 0.5,
    width: 76,
    height: 49,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  avatarIconPosition: {
    top: 20,
    position: "absolute",
  },
  minAgoTypo: {
    textAlign: "left",
    overflow: "hidden",
  },
  labelTypo: {
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
    height: 5,
    width: 134,
    bottom: 8,
  },
  // iconhome: {
  //   top: 7,
  //   left: 26,
  //   position: "absolute",
  //   overflow: "hidden",
  // },
  // tabBarItem: {},
  // browse: {
  //   marginLeft: -17,
  // },
  tabBarItem2: {
    marginLeft: 8.5,
  },
  library: {
    marginLeft: -16,
  },
  tabBarItem3: {
    marginLeft: 103.5,
  },
  homeIndicator3: {
    marginLeft: -67,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
    height: 5,
    width: 134,
    bottom: 0,
  },
  homeIndicator2: {
    marginLeft: -65.5,
    bottom: 8,
  },
  // bottomTabBar: {
  //   flexDirection: "row",
  //   alignItems: "flex-start",
  //   bottom: 0,
  //   height: 115,
  //   position: "absolute",
  // },
  homeIndicator: {
    marginLeft: -187.5,
    height: 34,
    width: 375,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  profileImageIcon: {
    top: 16,
    left: 335,
    position: "absolute",
  },
  hireHive: {
    marginLeft: -45.5,
    top: 14,
    fontSize: 20,
    letterSpacing: -0.4,
    lineHeight: 28,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  iconmore: {
    width: "6.4%",
    top: "28.57%",
    right: "89.33%",
    bottom: "28.57%",
    left: "4.27%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  header: {
    height: 56,
    width: "100%",
    position: "absolute",
    left: "-3%",
    top: 0,
  },
  avatarIcon: {
    left: 20,
    borderRadius: 1000,
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  helena: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    color: Color.colorBlack,
    overflow: "hidden",
  },
  inGroupName: {
    width: 97,
    marginLeft: 4,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  nameGroup: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  minAgo: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorGray,
    alignSelf: "stretch",
  },
  metaData: {
    width: 259,
    zIndex: 0,
  },
  iconmore1: {
    top: 8,
    left: 275,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  postHeader: {
    alignItems: "center",
    flexDirection: "row",
    width: 299,
  },
  imageIcon: {
    borderRadius: 4,
    height: 299,
    marginTop: 12,
    width: 299,
    overflow: "hidden",
  },
  postDescription: {
    alignSelf: "stretch",
    color: Color.colorBlack,
    lineHeight: 20,
  },
  postActions: {
    height: 20,
    marginTop: 12,
    alignSelf: "stretch",
    alignItems: "center",
  },
  comment: {
    justifyContent: "center",
    marginTop: 12,
    width: 299,
  },
  postContent: {
    left: 64,
  },
  socialMediaPost: {
    top: 165,
    left: -11,
    width: 383,
    height: 454,
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    height: 30,
    color: Color.colorGray,
    flex: 1,
  },
  searchIcon: {
    marginLeft: 16,
  },
  inputField: {
    top: 69,
    width: "100%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  homepage: {
    width: "100%",
    height: 812,

    backgroundColor: Color.colorWhite,
  },
});
