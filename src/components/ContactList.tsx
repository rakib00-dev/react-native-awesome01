import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHenT5-Txu24tr6_jWEKDVEsJCitUPqeXxKg&s',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I To Code and Teach!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHenT5-Txu24tr6_jWEKDVEsJCitUPqeXxKg&s',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHenT5-Txu24tr6_jWEKDVEsJCitUPqeXxKg&s',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHenT5-Txu24tr6_jWEKDVEsJCitUPqeXxKg&s',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contactList.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.userImage}
              onError={e =>
                console.log('Image Load Error: ', e.nativeEvent.error)
              }
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'white',
    paddingHorizontal: 8,
  },
  container: {
    padding: 9,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 6,
    backgroundColor: '#8d3daf',
    padding: 8,
    borderRadius: 7,
  },
  userImage: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
    borderRadius: 30,
  },
  userName: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  userStatus: { color: 'white', fontSize: 13 },
});
