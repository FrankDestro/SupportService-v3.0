-- SLA --
INSERT INTO sla (severity, response_time) VALUES ('Baixa', 48);
INSERT INTO sla (severity, response_time) VALUES ('Média', 24);
INSERT INTO sla (severity, response_time) VALUES ('Alta', 12);
INSERT INTO sla (severity, response_time) VALUES ('Crítica', 4);
INSERT INTO sla (severity, response_time) VALUES ('Urgente', 1);

INSERT INTO Solving_Area (name) VALUES ('Redes');
INSERT INTO Solving_Area (name) VALUES ('Suporte a Sistemas');
INSERT INTO Solving_Area (name) VALUES ('Gestão de Acesso');
INSERT INTO Solving_Area (name) VALUES ('Departamento Pessoal');
INSERT INTO Solving_Area (name) VALUES ('Infraestrutura');
INSERT INTO Solving_Area (name) VALUES ('Desenvolvimento');
INSERT INTO Solving_Area (name) VALUES ('Recursos Humanos');
INSERT INTO Solving_Area (name) VALUES ('Marketing');
INSERT INTO Solving_Area (name) VALUES ('Vendas');
INSERT INTO Solving_Area (name) VALUES ('Financeiro');
INSERT INTO Solving_Area (name) VALUES ('Atendimento ao Cliente');
INSERT INTO Solving_Area (name) VALUES ('Gestão de Projetos');
INSERT INTO Solving_Area (name) VALUES ('Compliance');
INSERT INTO Solving_Area (name) VALUES ('Pesquisa e Desenvolvimento');
INSERT INTO Solving_Area (name) VALUES ('Treinamento e Desenvolvimento');
INSERT INTO Solving_Area (name) VALUES ('Planejamento Estratégico');

INSERT INTO Type_Request (name) VALUES ('Solicitação');
INSERT INTO Type_Request (name) VALUES ('Problema');
INSERT INTO Type_Request (name) VALUES ('Dúvidas');
INSERT INTO Type_Request (name) VALUES ('Incidente');
INSERT INTO Type_Request (name) VALUES ('Mudança');
INSERT INTO Type_Request (name) VALUES ('Requisição de Serviço');
INSERT INTO Type_Request (name) VALUES ('Melhoria');

INSERT INTO category_Ticket (name) VALUES ('Hardware');
INSERT INTO category_Ticket (name) VALUES ('Software');
INSERT INTO category_Ticket (name) VALUES ('Acessos');
INSERT INTO category_Ticket (name) VALUES ('Redes');
INSERT INTO category_Ticket (name) VALUES ('Segurança da Informação');
INSERT INTO category_Ticket (name) VALUES ('Banco de Dados');
INSERT INTO category_Ticket (name) VALUES ('Infraestrutura');
INSERT INTO category_Ticket (name) VALUES ('Desenvolvimento de Sistemas');
INSERT INTO category_Ticket (name) VALUES ('Telefonia');
INSERT INTO category_Ticket (name) VALUES ('Folha de Pagamento');
INSERT INTO category_Ticket (name) VALUES ('Benefícios');
INSERT INTO category_Ticket (name) VALUES ('Treinamento');
INSERT INTO category_Ticket (name) VALUES ('Recrutamento e Seleção');
INSERT INTO category_Ticket (name) VALUES ('Gestão de Desempenho');
INSERT INTO category_Ticket (name) VALUES ('ERP');
INSERT INTO category_Ticket (name) VALUES ('CRM');
INSERT INTO category_Ticket (name) VALUES ('Financeiro/Contábil');
INSERT INTO category_Ticket (name) VALUES ('Sistemas de Atendimento ao Cliente');
INSERT INTO category_Ticket (name) VALUES ('E-commerce');
INSERT INTO category_Ticket (name) VALUES ('Contas a Pagar');
INSERT INTO category_Ticket (name) VALUES ('Contas a Receber');
INSERT INTO category_Ticket (name) VALUES ('Faturamento');
INSERT INTO category_Ticket (name) VALUES ('Impostos e Tributos');
INSERT INTO category_Ticket (name) VALUES ('Controle de Orçamento');
INSERT INTO category_Ticket (name) VALUES ('Atendimento Telefônico');
INSERT INTO category_Ticket (name) VALUES ('Plataforma de Chat');
INSERT INTO category_Ticket (name) VALUES ('Tickets de Suporte');
INSERT INTO category_Ticket (name) VALUES ('Automação de Marketing');
INSERT INTO category_Ticket (name) VALUES ('Mídias Sociais');
INSERT INTO category_Ticket (name) VALUES ('Análises de Dados');
INSERT INTO category_Ticket (name) VALUES ('Gestão de Leads');
INSERT INTO category_Ticket (name) VALUES ('Pedidos de Venda');

INSERT INTO department (description) VALUES ('Recursos Humanos');
INSERT INTO department (description) VALUES ('Tecnologia da Informação');
INSERT INTO department (description) VALUES ('Financeiro');
INSERT INTO department (description) VALUES ('Marketing');
INSERT INTO department (description) VALUES ('Vendas');
INSERT INTO department (description) VALUES ('Suporte ao Cliente');
INSERT INTO department (description) VALUES ('Logística');
INSERT INTO department (description) VALUES ('Jurídico');
INSERT INTO department (description) VALUES ('Compras');
INSERT INTO department (description) VALUES ('Produção');
INSERT INTO department (description) VALUES ('Qualidade');
INSERT INTO department (description) VALUES ('Pesquisa e Desenvolvimento');
INSERT INTO department (description) VALUES ('Gestão de Projetos');
INSERT INTO department (description) VALUES ('Compliance');

INSERT INTO role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO role (authority) VALUES ('ROLE_OPERATOR');

-- Solicitante 1
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('João', 'Silva', 'joao.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11999998888', 1 , 'img1.png', '2023-10-24 08:30:00', '2023-10-24 08:30:00', 5, 'admin', true, 4, 1);
-- Solicitante 2
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Maria', 'Souza', 'maria.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11988887777', 1 , 'img2.png', '2023-10-24 09:00:00', '2023-10-24 09:00:00', 0, 'admin',false, 7, 1);
-- Técnico 1
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Carlos', 'Ferreira', 'carlos.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11977776666', 1 , 'img3.png', '2023-10-24 10:30:00', '2023-10-24 10:30:00', 0, 'admin', false, 2, 2);
-- Técnico 2
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Ana', 'Pereira', 'ana.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11966665555', 1 , 'img4.png', '2023-10-24 11:00:00', '2023-10-24 11:00:00', 0, 'admin', false, 2, 6);

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);

-- INSERT TICKET FULL.
INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Problema no sistema', 'Erro ao tentar acessar o sistema de pagamento', '2024-10-25 08:30:00', '2024-11-01 08:30:00', 4, '2024-11-01 08:30:00', 1, 2, 1, 1, 1, 3, 4);
INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('Anotação sobre o progresso do ticket', true, true, TIMESTAMP '2024-10-25 08:30:00', false, 'COMMENT', 1, 1);

INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/file.pdf', NOW(), 'file.pdf', 'PDF', 1, 2);
