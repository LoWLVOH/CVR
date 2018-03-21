import { GiftedChat } from 'react-native-gifted-chat'
import React from 'react';

class Chat extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2018, 5, 11, 17, 20, 0)),
        },
        {
          _id: 2,
          text: 'Ta gueule',
          createdAt: new Date(),
        },
        {
          _id: 3,
          text: 'Merci',
          createdAt: new Date(),
         },
         {
           _id: 4,
           text: 'Sajir',
           createdAt: new Date(),
          }
      ]
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
        <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }
}
