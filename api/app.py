# import pyodbc
# from flask import Flask, jsonify, request

# app = Flask(__name__)

# # Database Configuration
# server = 'teamenigma.database.windows.net'
# database = 'Aisportsgeneratordatabase'
# username = 'sqldatabase'
# password = 'Enigma123'

# connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'
# db_connection = pyodbc.connect(connection_string)


# def rows_to_dict_list(rows, columns):
#     return [dict(zip(columns, row)) for row in rows]

# @app.route('/api/MatchStats', methods=['GET'])
# def get_match_stats():
#     try:
#         selected_date = request.args.get('date')  # Get the selected date parameter from the request
#         with pyodbc.connect(connection_string) as db_connection:
#             cursor = db_connection.cursor()
#             cursor.execute("SELECT * FROM MatchStats WHERE Date = ?", selected_date)
#             rows = cursor.fetchall()
#             columns = [column[0] for column in cursor.description]
#             match_stats = rows_to_dict_list(rows, columns)
#             cursor.close()
#             return jsonify(match_stats)
#     except pyodbc.Error as e:
#         return jsonify(error=str(e))


# if __name__ == '__main__':
#     app.run() 

import pyodbc
from flask import Flask, jsonify, request

app = Flask(__name__)

# Database Configuration
server = 'teamenigma.database.windows.net'
database = 'Aisportsgeneratordatabase'
username = 'sqldatabase'
password = 'Enigma123'

connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'
db_connection = pyodbc.connect(connection_string)


def rows_to_dict_list(rows, columns):
    return [dict(zip(columns, row)) for row in rows]

@app.route('/api/MatchStats', methods=['GET'])
def get_match_stats():
    try:
        selected_date = request.args.get('date')  # Get the selected date parameter from the request
        with pyodbc.connect(connection_string) as db_connection:
            cursor = db_connection.cursor()

            # Modified SQL query to join MatchStats and MatchLogos tables
            cursor.execute("""
                SELECT ms.*, ml.LogoLink AS HomeTeamLogo, ml2.LogoLink AS AwayTeamLogo
                FROM MatchStats ms
                LEFT JOIN MatchLogos ml ON ms.Home = ml.Team
                LEFT JOIN MatchLogos ml2 ON ms.Away = ml2.Team
                WHERE ms.Date = ?
            """, selected_date)

            rows = cursor.fetchall()
            columns = [column[0] for column in cursor.description]
            match_stats = rows_to_dict_list(rows, columns)
            cursor.close()
            return jsonify(match_stats)
    except pyodbc.Error as e:
        return jsonify(error=str(e))
    

    

if __name__ == '__main__':
    app.run()
