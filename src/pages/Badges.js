import React, { Component } from "react";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import "./styles/Badges.css";
import confLogo from "../img/badge-header.svg";
import { Link } from "react-router-dom";
import api from "../api";

export class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: [],
  };

  componentDidMount() {
    this.fetchData();

    // this.intervalId = setInterval(this.fetchData, 5000)
  }

  // componentWillUnmount(){
  //   clearInterval(this.intervalId);
  // }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;