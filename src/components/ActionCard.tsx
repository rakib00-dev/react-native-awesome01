import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - es12
          </Text>
        </View>
        <Image
          source={{
            // uri: 'https://alimammiya.hashnode.dev/upcoming-interesting-javascript-es2021-es12-features-to-look-for-1',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHenT5-Txu24tr6_jWEKDVEsJCitUPqeXxKg&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={3} style={styles.cardDesc}>
            All five features you will read about in this article are currently
            at stage 4. What this means is that they are finished and ready to
            be implemented by JavaScript engines. This also means that you don't
            have to worry you will be wasting your time learning something that
            will never see the daylight. You will not.
          </Text>
        </View>
        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://alimammiya.hashnode.dev/upcoming-interesting-javascript-es2021-es12-features-to-look-for-1',
              )
            }
          >
            <Text style={styles.socialLinks}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/rakib.developer/')
            }
          >
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'white',
    paddingHorizontal: 8,
  },
  card: {
    padding: 8,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  elevatedCard: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#e07c24',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  headingContainer: {},
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  cardImage: {
    height: 200,
    borderRadius: 8,
  },
  cardBodyContainer: {
    marginVertical: 10,
  },
  cardDesc: {
    color: 'white',
    fontSize: 14,
  },
  cardFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
    marginBottom: 8,
  },
  socialLinks: {
    color: 'balck',
    backgroundColor: 'white',
    width: 100,
    borderRadius: 3,
    textAlign: 'center',
    padding: 6,
  },
});
