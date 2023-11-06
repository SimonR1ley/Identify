import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {addMessage, getAllMessagesFromCollection} from '../firebase/firebaseDb';
import ChatMessage from '../components/ChatMessage';
import {getCurrentUser} from '../firebase/firebaseAuth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Chat = ({route}) => {
  //   const users = route.params;
  const navigation = useNavigation();
  const user = getCurrentUser();

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState();

  const getAllMessages = async () => {
    const messages = await getAllMessagesFromCollection();
    setMessages(messages);
    // console.log(messages);
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  const sendMessage = async () => {
    if (inputText) {
      await addMessage({
        userId: user.uid,
        profileImage: user.photoURL,
        username: user.displayName,
        message: inputText,
        createdAt: firestore.Timestamp.now(),
      }).then(() => {
        setInputText('');
        getAllMessages();
      });
    }
  };

  const renderMessage = ({item}) => {
    return <ChatMessage data={item} viewProfile={ViewProfile} />;
  };

  const [viewImg, setViewImg] = useState('');
  const [imgViewActive, setImgViewActive] = useState(false);

  const ViewProfile = img => {
    setViewImg(img);
    setImgViewActive(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <View style={styles.container}>
        {imgViewActive ? (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(50, 50, 50, 0.9)',
              zIndex: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              setImgViewActive(false);
            }}>
            <Image
              source={{uri: viewImg}}
              style={{width: 300, height: 300, borderRadius: 500}}
            />
          </TouchableOpacity>
        ) : null}

        <View
          style={{
            width: '100%',
            height: 120,
            // borderBottomWidth: 1,
            // borderBottomColor: '#E0E0E0',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '100%',
              height: 110,
              backgroundColor: '#2D2E31',
              position: 'absolute',
              // bottom: 5,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 5,
              paddingTop: 35,
            }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                // marginRight: 10,
                position: 'absolute',
                zIndex: 2,
                top: 50,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/return2.png')}
              />
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 70,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingLeft: 30,
              }}>
              <Text style={{fontSize: 26, fontWeight: '700', color: 'white'}}>
                {/* {users.friends.name} */}
                Let's talk
              </Text>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Communication')}>
          <Image
            style={styles.backButtonImage}
            source={require('../assets/return.png')}
          />
        </TouchableOpacity> */}

        <FlatList
          inverted
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatContainer}
        />

        {/* <ChatMessage type="user" />
        <ChatMessage type="sender" />
        <ChatMessage type="user" /> */}

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={{
              borderRadius: 15,
              marginBottom: 10,
              marginRight: 20,
            }}
            // onPress={sendMessage}
          >
            <Image
              source={require('../assets/uploadWhite.png')}
              style={{width: 30, height: 30}}
            />
            {/* <Text style={styles.sendButtonText}>Send</Text> */}
          </TouchableOpacity>
          <TextInput
            style={styles.inputText}
            value={inputText}
            onChangeText={text => setInputText(text)}
            placeholder="Type a message..."
            placeholderTextColor="gray"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Image
              source={require('../assets/send.png')}
              style={{width: 25, height: 25}}
            />
            {/* <Text style={styles.sendButtonText}>Send</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 10,
    width: 50,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 5,
  },
  backButtonImage: {
    width: 30,
    height: 30,
  },
  chatContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  messageContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    maxWidth: '75%',
    alignSelf: 'flex-start',
  },
  currentUserMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#43A5CF',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    // borderTopWidth: 1,
    // borderTopColor: '#E0E0E0',
    // marginBottom: 20,
    height: 70,
    backgroundColor: '#2D2E31',
    // paddingTop: 10,
  },
  inputText: {
    flex: 1,
    height: 32,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 10,
  },
  sendButton: {
    // backgroundColor: '#43A5CF',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  otherUserMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#333740', // Use a different color for the other user's message container
  },
  otherUserMessageText: {
    fontSize: 16,
    color: 'white', // Use a different color for the other user's message text
  },
  senderName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white', // You can adjust the color as per your preference
  },

  myName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white',
  },

  currentUserMessageText: {
    color: 'white',
  },
});
