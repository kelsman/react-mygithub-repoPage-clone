import React, { Component, Fragment } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { BiCircle } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { VscProject } from 'react-icons/vsc';
import { GrCube } from 'react-icons/gr';
import { IconContext } from 'react-icons'
import { getRepos, setLoadingState } from '../../redux/Actions/Repo/RepoActions'
import Search from '../../components/SearchRepo/searchRepo';
import SelectRepo from '../../components/selectRepoType';
import LanguageType from '../../components/Language';
import { AiOutlineStar } from 'react-icons/ai';
// import PopularRepos from '../../components/repositories/popularRepos';
// import Repositories from '../../components/repositories/popularRepos/repositories';


class Explore extends Component {

    state = {
        openRepos: false,
        openProject: false,
        openPackages: false,
        showDefault: true,
        searchField: '',
        Repos: []

    }

    componentDidMount = async () => {

        try {
            const { getRepos } = this.props;

            await getRepos();
            await this.setState({
                Repos: this.props.repos
            });
            console.log(this.state.Repos[0]);


        } catch (error) {
            console.log(error)
        }


    }

    handleOverviewClicked = () => {

    }
    handleRepoClicked = async () => {
        this.setState({
            openRepos: true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleSearchInput = (e) => {
        this.setState({ searchField: e.target.value })
    }

    languageFilter = (lang) => {


    }

    render() {
        const { openRepos, showDefault, openProject, openPackages, searchField } = this.state;
        const { repos, searchValue, loading } = this.props;



        const FilteredRepos = this.state.Repos.filter((repo) => {
            return repo.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (

            <div className="explore-wrapper">


                <div className="overhead">
                    <ul>
                        <li onClick={this.handleOverviewClicked}>
                            <IconContext.Provider value={{ className: "icon" }}>
                                <BsBook />
                            </IconContext.Provider>
                           overview
                     </li>
                        <li onClick={this.handleRepoClicked}>
                            <IconContext.Provider value={{ className: "icon" }} >
                                <RiGitRepositoryLine />

                            </IconContext.Provider>
                    repositories
                    </li>
                        <li>
                            <IconContext.Provider value={{ className: "icon" }} >
                                <VscProject />
                            </IconContext.Provider>
                    projects
                    </li>
                        <li>
                            <IconContext.Provider value={{ className: "icon" }}>
                                <GrCube />
                            </IconContext.Provider>
                    packages
                </li>
                    </ul>
                </div>
                { openRepos && (

                    <Fragment>

                        <div className="filter-wrapper">
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-control'>
                                    <input
                                        name="searchField"
                                        type='text'
                                        placeholder='Find a Repository...'
                                        value={this.state.searchField}
                                        onChange={this.handleSearchInput}
                                    />

                                </div>
                            </form>
                            <SelectRepo />
                            <LanguageType />
                        </div>

                        <div className="repo-wrap">
                            {showDefault && repos && loading !== true ? (

                                FilteredRepos.map((repo) => {
                                    return (
                                        <div key={repo.id} className="repo">
                                            <section>
                                                <h5>{repo.name}</h5>
                                                <div className="lang-wrap">
                                                    <IconContext.Provider value={{ style: { fill: "yellow" } }}>
                                                        <BiCircle />

                                                    </IconContext.Provider>
                                                    <span>{repo.language}</span>


                                                </div>
                                                <p>{repo.description}</p>
                                                <small>updated at  {repo.updated_at}</small>
                                            </section>
                                            <div>

                                                <button>
                                                    <IconContext.Provider value={{}}>
                                                        <AiOutlineStar />

                                                    </IconContext.Provider>
                                            star
                                            </button>
                                            </div>
                                        </div>

                                    )
                                })

                            ) : <h6>Loading...</h6>}

                        </div>



                    </Fragment>

                )}
            </div>
        )
    }
}










const mapStateToProps = ({ user, repo }) => ({
    user: user.user,
    repoLoading: repo.loading,
    repos: repo.repos,
    searchValue: repo.searchedRepo
});
const mapDispatchToProps = {
    getRepos,
    setLoadingState
}
export default connect(mapStateToProps, mapDispatchToProps)(Explore);