---- SLA --
--INSERT INTO sla (severity, response_time) VALUES ('Baixa', 48);
--INSERT INTO sla (severity, response_time) VALUES ('Média', 24);
--INSERT INTO sla (severity, response_time) VALUES ('Alta', 12);
--INSERT INTO sla (severity, response_time) VALUES ('Crítica', 4);
--INSERT INTO sla (severity, response_time) VALUES ('Urgente', 1);
--
--INSERT INTO Solving_Area (name) VALUES ('Redes');
--INSERT INTO Solving_Area (name) VALUES ('Suporte a Sistemas');
--INSERT INTO Solving_Area (name) VALUES ('Gestão de Acesso');
--INSERT INTO Solving_Area (name) VALUES ('Departamento Pessoal');
--INSERT INTO Solving_Area (name) VALUES ('Infraestrutura');
--INSERT INTO Solving_Area (name) VALUES ('Desenvolvimento');
--INSERT INTO Solving_Area (name) VALUES ('Recursos Humanos');
--INSERT INTO Solving_Area (name) VALUES ('Marketing');
--INSERT INTO Solving_Area (name) VALUES ('Vendas');
--INSERT INTO Solving_Area (name) VALUES ('Financeiro');
--INSERT INTO Solving_Area (name) VALUES ('Atendimento ao Cliente');
--INSERT INTO Solving_Area (name) VALUES ('Gestão de Projetos');
--INSERT INTO Solving_Area (name) VALUES ('Compliance');
--INSERT INTO Solving_Area (name) VALUES ('Pesquisa e Desenvolvimento');
--INSERT INTO Solving_Area (name) VALUES ('Treinamento e Desenvolvimento');
--INSERT INTO Solving_Area (name) VALUES ('Planejamento Estratégico');
--
--INSERT INTO Type_Request (name) VALUES ('Solicitação');
--INSERT INTO Type_Request (name) VALUES ('Problema');
--INSERT INTO Type_Request (name) VALUES ('Dúvidas');
--INSERT INTO Type_Request (name) VALUES ('Incidente');
--INSERT INTO Type_Request (name) VALUES ('Mudança');
--INSERT INTO Type_Request (name) VALUES ('Requisição de Serviço');
--INSERT INTO Type_Request (name) VALUES ('Melhoria');
--
--INSERT INTO category_Ticket (name) VALUES ('Hardware');
--INSERT INTO category_Ticket (name) VALUES ('Software');
--INSERT INTO category_Ticket (name) VALUES ('Acessos');
--INSERT INTO category_Ticket (name) VALUES ('Redes');
--INSERT INTO category_Ticket (name) VALUES ('Segurança da Informação');
--INSERT INTO category_Ticket (name) VALUES ('Banco de Dados');
--INSERT INTO category_Ticket (name) VALUES ('Infraestrutura');
--INSERT INTO category_Ticket (name) VALUES ('Desenvolvimento de Sistemas');
--INSERT INTO category_Ticket (name) VALUES ('Telefonia');
--INSERT INTO category_Ticket (name) VALUES ('Folha de Pagamento');
--INSERT INTO category_Ticket (name) VALUES ('Benefícios');
--INSERT INTO category_Ticket (name) VALUES ('Treinamento');
--INSERT INTO category_Ticket (name) VALUES ('Recrutamento e Seleção');
--INSERT INTO category_Ticket (name) VALUES ('Gestão de Desempenho');
--INSERT INTO category_Ticket (name) VALUES ('ERP');
--INSERT INTO category_Ticket (name) VALUES ('CRM');
--INSERT INTO category_Ticket (name) VALUES ('Financeiro/Contábil');
--INSERT INTO category_Ticket (name) VALUES ('Sistemas de Atendimento ao Cliente');
--INSERT INTO category_Ticket (name) VALUES ('E-commerce');
--INSERT INTO category_Ticket (name) VALUES ('Contas a Pagar');
--INSERT INTO category_Ticket (name) VALUES ('Contas a Receber');
--INSERT INTO category_Ticket (name) VALUES ('Faturamento');
--INSERT INTO category_Ticket (name) VALUES ('Impostos e Tributos');
--INSERT INTO category_Ticket (name) VALUES ('Controle de Orçamento');
--INSERT INTO category_Ticket (name) VALUES ('Atendimento Telefônico');
--INSERT INTO category_Ticket (name) VALUES ('Plataforma de Chat');
--INSERT INTO category_Ticket (name) VALUES ('Tickets de Suporte');
--INSERT INTO category_Ticket (name) VALUES ('Automação de Marketing');
--INSERT INTO category_Ticket (name) VALUES ('Mídias Sociais');
--INSERT INTO category_Ticket (name) VALUES ('Análises de Dados');
--INSERT INTO category_Ticket (name) VALUES ('Gestão de Leads');
--INSERT INTO category_Ticket (name) VALUES ('Pedidos de Venda');
--
--INSERT INTO department (description) VALUES ('Recursos Humanos');
--INSERT INTO department (description) VALUES ('Tecnologia da Informação');
--INSERT INTO department (description) VALUES ('Financeiro');
--INSERT INTO department (description) VALUES ('Marketing');
--INSERT INTO department (description) VALUES ('Vendas');
--INSERT INTO department (description) VALUES ('Suporte ao Cliente');
--INSERT INTO department (description) VALUES ('Logística');
--INSERT INTO department (description) VALUES ('Jurídico');
--INSERT INTO department (description) VALUES ('Compras');
--INSERT INTO department (description) VALUES ('Produção');
--INSERT INTO department (description) VALUES ('Qualidade');
--INSERT INTO department (description) VALUES ('Pesquisa e Desenvolvimento');
--INSERT INTO department (description) VALUES ('Gestão de Projetos');
--INSERT INTO department (description) VALUES ('Compliance');
--
--INSERT INTO role (authority) VALUES ('ROLE_ADMIN');
--INSERT INTO role (authority) VALUES ('ROLE_OPERATOR');
--
---- Solicitante 1
--INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('João', 'Silva', 'joao.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11999998888', 1 , 'img1.png', '2023-10-24 08:30:00', '2023-10-24 08:30:00', 5, 'admin', true, 4, 1);
---- Solicitante 2
--INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Maria', 'Souza', 'maria.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11988887777', 1 , 'img2.png', '2023-10-24 09:00:00', '2023-10-24 09:00:00', 0, 'admin',false, 7, 1);
---- Técnico 1
--INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Carlos', 'Ferreira', 'carlos.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11977776666', 1 , 'img3.png', '2023-10-24 10:30:00', '2023-10-24 10:30:00', 0, 'admin', false, 2, 2);
---- Técnico 2
--INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Ana', 'Pereira', 'ana.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11966665555', 1 , 'img4.png', '2023-10-24 11:00:00', '2023-10-24 11:00:00', 0, 'admin', false, 2, 6);
--
--INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
--INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
--INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
--INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);
--
---- INSERT TICKET FULL.
--INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Problema no sistema', 'Erro ao tentar acessar o sistema de pagamento', '2024-10-25 08:30:00', '2024-11-01 08:30:00', 4, '2024-11-01 08:30:00', 1, 2, 1, 1, 1, 3, 4);
--INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('Anotação sobre o progresso do ticket', true, true, TIMESTAMP '2024-10-25 08:30:00', false, 'COMMENT', 1, 1);
--
--INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/file.pdf', NOW(), 'file.pdf', 'PDF', 1, 2);

-- SLA --
INSERT INTO sla (severity, response_time) VALUES ('Baixa', 48);
INSERT INTO sla (severity, response_time) VALUES ('Média', 24);
INSERT INTO sla (severity, response_time) VALUES ('Alta', 12);
INSERT INTO sla (severity, response_time) VALUES ('Crítica', 4);
INSERT INTO sla (severity, response_time) VALUES ('Urgente', 1);

-- Inserindo as áreas solucionadoras
INSERT INTO Solving_Area (id, name) VALUES (1, 'Redes');
INSERT INTO Solving_Area (id, name) VALUES (2, 'Suporte a Sistemas');
INSERT INTO Solving_Area (id, name) VALUES (3, 'Gestão de Acesso');
INSERT INTO Solving_Area (id, name) VALUES (4, 'Departamento Pessoal');
INSERT INTO Solving_Area (id, name) VALUES (5, 'Infraestrutura');
INSERT INTO Solving_Area (id, name) VALUES (6, 'Desenvolvimento');
INSERT INTO Solving_Area (id, name) VALUES (7, 'Recursos Humanos');
INSERT INTO Solving_Area (id, name) VALUES (8, 'Marketing');
INSERT INTO Solving_Area (id, name) VALUES (9, 'Vendas');
INSERT INTO Solving_Area (id, name) VALUES (10, 'Financeiro');
INSERT INTO Solving_Area (id, name) VALUES (11, 'Atendimento ao Cliente');
INSERT INTO Solving_Area (id, name) VALUES (12, 'Gestão de Projetos');
INSERT INTO Solving_Area (id, name) VALUES (13, 'Compliance');
INSERT INTO Solving_Area (id, name) VALUES (14, 'Pesquisa e Desenvolvimento');
INSERT INTO Solving_Area (id, name) VALUES (15, 'Treinamento e Desenvolvimento');
INSERT INTO Solving_Area (id, name) VALUES (16, 'Planejamento Estratégico');

-- Inserindo as categorias com associação de áreas solucionadoras
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Hardware', 5);             -- Infraestrutura
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Software', 2);             -- Suporte a Sistemas
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Acessos', 3);              -- Gestão de Acesso
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Redes', 1);                -- Redes
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Segurança da Informação', 5); -- Infraestrutura
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Banco de Dados', 6);       -- Desenvolvimento
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Infraestrutura', 5);       -- Infraestrutura
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Desenvolvimento de Sistemas', 6); -- Desenvolvimento
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Telefonia', 1);            -- Redes
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Folha de Pagamento', 4);   -- Departamento Pessoal
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Benefícios', 4);           -- Departamento Pessoal
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Treinamento', 15);         -- Treinamento e Desenvolvimento
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Recrutamento e Seleção', 7); -- Recursos Humanos
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Gestão de Desempenho', 7); -- Recursos Humanos
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('ERP', 10);                 -- Financeiro
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('CRM', 9);                  -- Vendas
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Financeiro/Contábil', 10); -- Financeiro
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Sistemas de Atendimento ao Cliente', 11); -- Atendimento ao Cliente
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('E-commerce', 6);           -- Desenvolvimento
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Contas a Pagar', 10);      -- Financeiro
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Contas a Receber', 10);    -- Financeiro
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Faturamento', 10);         -- Financeiro
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Impostos e Tributos', 10); -- Financeiro
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Controle de Orçamento', 10); -- Financeiro
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Atendimento Telefônico', 11); -- Atendimento ao Cliente
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Plataforma de Chat', 11);  -- Atendimento ao Cliente
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Tickets de Suporte', 2);   -- Suporte a Sistemas
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Automação de Marketing', 8); -- Marketing
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Mídias Sociais', 8);       -- Marketing
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Análises de Dados', 8);    -- Marketing
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Gestão de Leads', 9);      -- Vendas
INSERT INTO category_Ticket (name, solving_area_id) VALUES ('Pedidos de Venda', 9);     -- Vendas

INSERT INTO Type_Request (name) VALUES ('Solicitação');
INSERT INTO Type_Request (name) VALUES ('Problema');
INSERT INTO Type_Request (name) VALUES ('Dúvidas');
INSERT INTO Type_Request (name) VALUES ('Incidente');
INSERT INTO Type_Request (name) VALUES ('Mudança');
INSERT INTO Type_Request (name) VALUES ('Requisição de Serviço');
INSERT INTO Type_Request (name) VALUES ('Melhoria');

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
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('João', 'Silva', 'joao.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11999998888', 0 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 08:30:00', '2023-10-24 08:30:00', 5, 'admin', true, 4, 1);
-- Solicitante 2
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Maria', 'Souza', 'maria.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11988887777', 1 , 'https://plus.unsplash.com/premium_photo-1693000697180-4e285198d71c?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 09:00:00', '2023-10-24 09:00:00', 0, 'admin',false, 7, 1);
-- Técnico 1
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Carlos', 'Ferreira', 'carlos.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11977776666', 1 , 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 10:30:00', '2023-10-24 10:30:00', 0, 'admin', false, 2, 2);
-- Técnico 2
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Ana', 'Pereira', 'ana.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11966665555', 1 , 'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 11:00:00', '2023-10-24 11:00:00', 0, 'admin', false, 2, 6);


-- novos integrantes --

INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Pedro', 'Oliveira', 'pedro.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11955554444', 0 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 12:00:00', '2023-10-24 12:00:00', 1, 'admin', true, 3, 1);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Fernanda', 'Costa', 'fernanda.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11944443333', 1 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 13:00:00', '2023-10-24 13:00:00', 0, 'admin', false, 6, 1);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Lucas', 'Mendes', 'lucas.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11933332222', 1 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 14:00:00', '2023-10-24 14:00:00', 0, 'admin', false, 5, 2);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Roberta', 'Almeida', 'roberta.tecnico@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11922221111', 1 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 15:00:00', '2023-10-24 15:00:00', 0, 'admin', false, 3, 2);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Rafael', 'Gomes', 'rafael.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11911110000', 0 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 16:00:00', '2023-10-24 16:00:00', 3, 'admin', true, 8, 1);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Juliana', 'Lima', 'juliana.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11988884444', 1 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 17:00:00', '2023-10-24 17:00:00', 0, 'admin', false, 7, 1);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Fernanda', 'Rocha', 'fernanda.rocha@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11933338888', 1 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 18:00:00', '2023-10-24 18:00:00', 0, 'admin', false, 6, 2);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Beatriz', 'Silva', 'beatriz.silva@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11944445555', 1 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 19:00:00', '2023-10-24 19:00:00', 0, 'admin', false, 5, 2);
INSERT INTO tb_user (first_name, last_name, email, password, contact_number, status_user, img_profile, created_at, update_at, failed_login_attempts, created_by_user_name, blocked, solving_area_id, id_department) VALUES ('Carlos', 'Pereira', 'carlos.solicitante@empresa.com', '$2a$10$BZEayVp6X1Ry93e44/Rnze0hpK5J3ThbAdUm2OzH.GSWjA4zmtGHW', '11977776666', 0 , 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-10-24 20:00:00', '2023-10-24 20:00:00', 0, 'admin', false, 8, 1);

-- novos integrantes --
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);

INSERT INTO tb_user_role (user_id, role_id) VALUES (5, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (6, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (7, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (8, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (9, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (10, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (11, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (12, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (13, 2);

-- INSERT TICKET FULL.
INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Problema no sistema', 'Erro ao tentar acessar o sistema de pagamento', '2024-10-25 08:30:00', '2024-11-01 08:30:00', 4, '2024-11-01 08:30:00', 1, 2, 1, 1, 1, 3, 4);
INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('Anotação sobre o progresso do ticket', true, true, TIMESTAMP '2024-10-25 08:30:00', false, 'COMMENT', 1, 1);

INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/file.pdf', NOW(), 'file.pdf', 'PDF', 1, 2);

INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Problema no login', 'Erro ao tentar fazer login no sistema', '2024-10-26 09:00:00', '2024-11-02 09:00:00', 3, '2024-11-02 09:00:00', 2, 3, 1, 2, 2, null, null);
INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Erro na API', 'Falha ao integrar a API de pagamentos', '2024-10-27 10:15:00', '2024-11-03 10:15:00', 2, '2024-11-03 10:15:00', 3, 4, 2, 3, 3, null, null);
INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Problema de rede', 'Conexão intermitente com a rede corporativa', '2024-10-28 11:30:00', '2024-11-05 11:30:00', 1, '2024-11-05 11:30:00', 4, 2, 3, 4, 4, null, null);
INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Erro no sistema de inventário', 'Falha ao tentar atualizar o inventário de produtos', '2024-10-29 13:00:00', '2024-11-06 13:00:00', 4, '2024-11-06 13:00:00', 1, 2, 1, 5, 5, null, null);
INSERT INTO ticket (subject, description, registration_date, due_date, status_ticket, completion_date, type_request_id, requester_id, sla_id, solving_area_id, category_ticket_id, technician_id, resolver_id) VALUES ('Problema de impressão', 'Impressora não está funcionando', '2024-10-30 14:45:00', '2024-11-07 14:45:00', 3, '2024-11-07 14:45:00', 2, 3, 2, 6, 6, 3, null);

INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('O técnico iniciou a investigação do problema', true, true, TIMESTAMP '2024-10-26 09:30:00', false, 'COMMENT', 2, 3);
INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('API falhou durante a comunicação com o servidor externo', true, true, TIMESTAMP '2024-10-27 10:45:00', false, 'COMMENT', 3, 4);
INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('Verificação de rede em andamento, aguardando resposta do provedor', true, false, TIMESTAMP '2024-10-28 12:00:00', false, 'COMMENT', 4, 3);
INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('Atualização de inventário em andamento, aguardando correção do erro', false, false, TIMESTAMP '2024-10-29 13:30:00', false, 'COMMENT', 5, 2);
INSERT INTO ticket_history (description, annotation_public, visible_to_requester, registration_date, system_generated, note_type, ticket_id, user_id) VALUES ('Verificação realizada, aguardando substituição de peça da impressora', true, true, TIMESTAMP '2024-10-30 15:00:00', false, 'COMMENT', 6, 4);

INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/ticket2-file.pdf', NOW(), 'ticket2-file.pdf', 'PDF', 2, 3);
INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/ticket3-file.pdf', NOW(), 'ticket3-file.pdf', 'PDF', 3, 4);
INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/ticket4-file.pdf', NOW(), 'ticket4-file.pdf', 'PDF', 4, 4);
INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/ticket5-file.pdf', NOW(), 'ticket5-file.pdf', 'PDF', 5, 4);
INSERT INTO attachment (url, registration_date, file_name, type, ticket_id, user_id) VALUES ('https://example.com/ticket6-file.pdf', NOW(), 'ticket6-file.pdf', 'PDF', 6, 3);



