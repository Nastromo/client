import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResults, itemClick, setResults, setActiveRow } from '../store/actions/SearchInput';



export class SearchInput extends Component {
    componentWillMount() {
        document.addEventListener('click', this.handleSearchDropDown);
        document.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleSearchDropDown);
        document.addEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = (e) => {
        if (this.props.searchResults && this.props.searchResults.length > 0 && e.keyCode === 40) {
            this.props.setActiveRow(this.props.activeRow + 1);

        } else if (this.props.searchResults && this.props.searchResults.length > 0 && e.keyCode === 38) {
            this.props.setActiveRow(this.props.activeRow - 1);

        } else if (this.props.searchResults && this.props.searchResults.length > 0 && e.keyCode === 27) {
            this.props.setResults({
                id: this.props.id,
                list: []
            });

        } else if (this.props.searchResults && this.props.searchResults.length > 0 && e.keyCode === 13) {
            if (typeof this.props.onItemClick === "function") {
                this.props.onItemClick(this.props.searchResults[this.props.activeRow]);
                this.props.itemClick({
                    id: this.props.id,
                    text: this.props.searchResults[this.props.activeRow],
                });
            } else {
                this.props.itemClick({
                    id: this.props.id,
                    text: this.props.searchResults[this.props.activeRow],
                });
            }
        }
    }

    handleSearchDropDown = (e) => {
        this.props.setResults({
            id: this.props.id,
            list: []
        });
    }

    getResults = (e) => {
        this.props.getResults(e.target.id, this.props.url, e.target.value);
    }

    itemClick = (e) => {
        this.props.itemClick({
            id: this.props.id,
            text: this.props.searchResults[this.props.activeRow],
        });
        if (typeof this.props.onItemClick === "function") this.props.onItemClick(this.props.searchResults[this.props.activeRow]);
    }

    render() {
        return (
            <div className="relative">

                <input
                    id={this.props.id}
                    className={this.props.view}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.searchQuery || "" }
                    onChange={this.getResults}
                    autoComplete="off" />

                { this.props.isLoading ? <div className="absolute whiteback">Loading...</div> : null }

                <div className={this.props.searchResults && this.props.searchResults.length > 0 ? "search-results" : null}>
                    {
                       this.props.searchResults ? this.props.searchResults.map((item, i) => {
                            return (
                                <p onClick={this.itemClick} id={item} className={this.props.activeRow === i ? "search-item active-row" 
                                : "search-item"} key={i}>{item}</p>
                            )
                        }) : null
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activeRow: state.activeRow
})

const mapDispatchToProps = dispatch => ({
    getResults: (searchInputId, url, searchQuery) => dispatch(getResults(searchInputId, url, searchQuery)),
    itemClick: (e) => dispatch(itemClick(e)),
    setResults: (obj) => dispatch(setResults(obj)),
    setActiveRow: (index) => dispatch(setActiveRow(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
