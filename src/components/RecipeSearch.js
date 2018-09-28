import React, { Component } from 'react'
import { connect } from 'react-redux'
import { default as ReactSelect } from 'react-select';


class RecipeSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
        }
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="section">
                {<ReactSelect
                    placeholder={"Sök Recept"}

                    value={selectedOption}
                    onChange={this.onChange}
                    onInputChange={this.onInputChange}
                    options={this.props.recipes.map((item) => {
                        return {
                            value: item.name,
                            label: item.name
                        }
                    })}
                />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch)
