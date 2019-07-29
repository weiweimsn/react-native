import React, {Component, useState} from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import EventCard from "./EventCard";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

export default class EventLIst extends React.Component{
    
    state = {
        events: []
    }

    componentDidMount(){
        // const data = require('./db.json').events;
        const data = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({events: data});
        // this.setState(prevState => ({events: data}));
        setInterval(() => {
            this.setState({events: this.state.events.map(evt => ({
                ...evt,
                123: Date.now
            }))})
        }, (1000));
    }

    render(){
        return (
            <View>
                <FlatList data={this.state.events} renderItem={ ({item}) => <EventCard  event={item}/>}
                    keyExtractor={item => item.id}>
                </FlatList>  
            </View>
         )
    }
}
