import React, {Component} from 'react'


class Menu extends Component {

  render() {

    return (
        <center>
        <div class="navbar">
          <a href="/"><i class="fa fa-home"></i></a>
          <a href="/instructions"><i class="fa fa-cogs"></i></a>

        </div>
        </center>
    )
  }
}


export default Menu;