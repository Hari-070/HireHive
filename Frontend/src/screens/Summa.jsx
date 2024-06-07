const Summa=()=>{
    return(
        <ScrollView>
        {console.log(data)}
        {data.map((item) => {
          return (
              <>
              <View style={styles.maincontroller}>
                <View style={styles.card}>
                  <View style={styles.cardheader}>
                    <Image
                      source={require("../main_assets/profile-image.png")}
                    ></Image>
                    <Text style={{ fontSize: 18 }}>{item.username}</Text>
                  </View>
                  <View style={styles.cardcontent}>
                    <ViewMoreText
                      numberOfLines={2}
                      renderViewMore={renderViewMore}
                      renderViewLess={renderViewLess}
                    >
                      <Text numberOfLines={2}>{item.description}</Text>
                    </ViewMoreText>
                  </View>
                  {/* <View style={styles.innnercard}>
                    <Image source={require("../main_assets/store.jpeg")} style={{width: Dimensions.get("window").width,height:100}}></Image>
                  </View> */}
                  <View style={styles.innnercard}>
                    <Text>Hello</Text>
                  </View>
                  <View style={styles.cardfooter}>
                    <Text>Application Applied : 1</Text>
                    <Text>Vacancies : {item.vacancy}</Text>
                  </View>
                </View>

              </View>
              <TouchableOpacity style={styles.directbtn}>
                <Text style={styles.postbtnText}>Post</Text>
              </TouchableOpacity>
              </>
          );
        })}
        </ScrollView>
    )
}