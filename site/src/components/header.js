import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import './header.scss';

import { ReactComponent as LogoSymbol } from './svgs/wpackio-symbol.svg';
import { ReactComponent as GithubIcon } from './svgs/github.svg';
import { ReactComponent as TwitterIcon } from './svgs/twitter.svg';

class Header extends React.Component {
	state = {
		isOpen: false,
	};

	handleToggle = e => {
		e.preventDefault();
		this.setState(state => ({ isOpen: !state.isOpen }));
	};

	render() {
		const { siteTitle, docTypes, github, twitter } = this.props;

		return (
			<nav
				role="navigation"
				aria-label="main navigation"
				className="navbar site-header is-fixed-top"
			>
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item">
							<h1 className="site-header__logo" title={siteTitle}>
								<LogoSymbol height="1.75em" width="1.75em" />
								<span className="wpackio-logo-text">
									wpack.
									<em>io</em>
								</span>
							</h1>
						</Link>
						<a
							role="button"
							className={classNames('burger', 'navbar-burger', {
								'is-active': this.state.isOpen,
							})}
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
							href="#"
							onClick={this.handleToggle}
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>
					<div
						className={classNames(
							'site-header__nav',
							'navbar-menu',
							{
								'is-active': this.state.isOpen,
							}
						)}
					>
						<div className="navbar-end site-header__main-nav">
							{docTypes.map(docType => (
								<Link
									className="navbar-item"
									key={docType.docType}
									to={`/${docType.docType}/`}
								>
									{docType.label}
								</Link>
							))}
						</div>
					</div>
					<div className="site-header__social-nav">
						<a href={github} className="navbar-item">
							<GithubIcon />
						</a>
						<a href={twitter} className="navbar-item">
							<TwitterIcon />
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
