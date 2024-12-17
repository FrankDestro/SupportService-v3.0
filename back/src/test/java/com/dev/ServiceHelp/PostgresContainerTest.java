package com.dev.ServiceHelp;

import org.junit.jupiter.api.Test;
import org.testcontainers.containers.PostgreSQLContainer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PostgresContainerTest {

    @Test
    void testPostgresContainer() throws Exception {
        try (PostgreSQLContainer<?> postgresContainer = new PostgreSQLContainer<>("postgres:15")) {
            postgresContainer.start();

            String jdbcUrl = postgresContainer.getJdbcUrl();
            String username = postgresContainer.getUsername();
            String password = postgresContainer.getPassword();

            try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
                 Statement statement = connection.createStatement()) {

                // Crie uma tabela e insira dados
                statement.execute("CREATE TABLE test (id SERIAL PRIMARY KEY, name VARCHAR(100));");
                statement.execute("INSERT INTO test (name) VALUES ('Testcontainers');");

                // Consulte os dados
                ResultSet resultSet = statement.executeQuery("SELECT name FROM test WHERE id = 1;");
                resultSet.next();

                // Verifique o resultado
                assertEquals("Testcontainers", resultSet.getString("name"));
            }
        }
    }
}
