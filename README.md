# Brooklyn Nets Player API

This is a basic guide on how to set up a RESTful API using Node.js, MongoDB, Mongoose, and Express.

## Prerequisites

- Learning Node.js, MongoDB, Mongoose, and Express in class.

## Getting Started

1.  Created new database using MongoDB in the terminal.

1.  Install dependencies:

`npm init -y`
`npm install mongoose express`
`npm install --save-dev nodemon`

## API Endpoints

### Players

- `GET /players`: Get a list of all players.
- `GET /players/:id`: Get a specific player by ID.
- `POST /players`: Create a new player.
- `PUT /players/:id`: Update a player's information by ID.
- `DELETE /players/:id`: Delete a player by ID.

## Data Model

The API uses a "Player" model, which is defined using Mongoose in the `models/Player.js` file. The Player model has the following fields:

- `name`: String
- `gp`: Number
- `min`: Number
- `fgp`: Number
- `tpp`: Number
- `ftp`: Number
- `reb`: Number
- `ast`: Number
- `blk`: Number
- `stl`: Number
- `pf`: Number
- `to`: Number
- `pts`: Number

## Error Handling

Errors are handled using middleware in the `controllers/error.js` file. Any errors that occur during API requests will be caught and handled appropriately.

## Contributing

If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue.
