import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddRecipe extends Component {
  render() {
    return (
      <div>
        <p>ADD RECIPE</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
