import React, {Component} from 'react';
import './App.css';
import SongList from './SongList';

class SongOverview extends Component {
  
  constructor() {
    super()
    this.state = 
    { songs:[
        title= '',
        artist= '',
        genre= '',
        rating= '',] 
    }
    this.handleChange = this.handleChange.bind(this);
    this.addSong = this.addSong.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  addSong(song) {
    this.setState(prevState =>{
      return{
        
        prevState: songs.concat(song),
      };
    });
  }

  render() {
    return (
      <div className='App'>
   
        <br/>
        <form>
          <input type='text' value={this.state.title} name='title' placeholder='Title' onChange={this.handleChange} />
          <input type='text' value={this.state.artist} name='artist' placeholder='Artist' onChange={this.handleChange} />
          <input type='text' value={this.state.genre} name='genre' placeholder='Genre' onChange={this.handleChange} />
          <input type='text' value={this.state.rating} name='rating' placeholder='Rating' onChange={this.handleChange} />
          <button >submit</button>
        </form>
        
        
        
        <p><strong>Title:</strong> {this.state.title}</p>
        <p><strong>Artist:</strong> {this.state.artist}</p>
        <p><strong>Genre:</strong> {this.state.genre}</p>
        <p><strong>Rating:</strong> {this.state.rating}</p>


        <table>
		        <tr >  
			        <th className="song-row__item">Song</th>
			        <th className="song-row__item">Artist</th>
			        <th className="song-row__item">Genre</th>
			        <th className="song-row__item">Rating</th>
			      </tr>
				</table>

        <ul className='Songlist'></ul>
      <SongList />
      </div>
    );
  }
}

export default SongOverview;
