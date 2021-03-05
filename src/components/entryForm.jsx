import React from "react";
import Joi from 'joi-browser';
import Form from './common/form';
import {getCategories} from "../services/fakeCategories";
import {getEntry, saveEntry} from "../services/fakeEntries";

class EntryForm extends Form {
    state = {
        data: {
            title: '',
            amount: '',
            categoryId: '',
            shop: ''
        },
        categories: [],
        errors: {}
    };

    schema = {
        id: Joi.number(),
        title: Joi.string()
            .required()
            .label('Title'),
        amount: Joi.number()
            .min(0)
            .required()
            .label('Amount'),
        categoryId: Joi.number()
            .required()
            .label('Category'),
        shop: Joi.string()
            .required()
            .label('Shop'),
        date: Joi.date(),
    };

    componentDidMount() {
        const categories = getCategories();
        this.setState({categories});

        const entryId = this.props.match.params.id;
        if (entryId === "new") return;

        const entry = getEntry(entryId);
        if (!entry) return this.props.history.replace("/not-found");

        this.setState({data: this.mapToViewModel(entry)});
    }

    mapToViewModel(entry) {
        return {
            id: entry.id,
            title: entry.title,
            amount: entry.amount,
            categoryId: entry.category.id,
            shop: entry.shop,
            date: entry.date
        };
    }

    doSubmit = () => {
        saveEntry(this.state.data);
        this.props.history.push("/expenses");
        // Call the server
        console.log('Submitted');
    };

    render() {
        return (
            <div className="container">
                <h1 className="title center">New entry</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderInput('amount', 'Amount')}
                    {this.renderSelect('categoryId', 'Category', this.state.categories)}
                    {this.renderInput('shop', 'Shop')}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default EntryForm;