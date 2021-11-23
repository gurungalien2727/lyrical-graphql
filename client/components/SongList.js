import React,{Component} from "react";
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const  SongList = (props) => {
      console.log(props.data);
     
      return (
      <ul>
            { !props.data.loading && props.data.songs.map(song => {
                return  ( <li key={song.id}>{song.id}{song.title}</li> )
            })}
      </ul>)

}

const query = gql`
{
      songs{
            title
            id
      }
}
`;

export default graphql(query) (SongList);