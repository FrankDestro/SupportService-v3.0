-- Criação da tabela de attachments
CREATE TABLE attachment (
    id BIGSERIAL NOT NULL,
    registration_date TIMESTAMP(6) WITH TIME ZONE,
    ticket_id BIGINT,
    user_id BIGINT,
    file_name VARCHAR(255),
    type VARCHAR(255) CHECK (type IN ('PDF','JPEG','PNG','GIF','DOC','DOCX','TXT')),
    url TEXT,
    PRIMARY KEY (id)
);

-- Criação da tabela de categorias de ticket
CREATE TABLE category_ticket (
    id BIGSERIAL NOT NULL,
    solving_area_id BIGINT,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

-- Criação da tabela de departamentos
CREATE TABLE department (
    id BIGSERIAL NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

-- Criação da tabela de recuperação de senha
CREATE TABLE password_recover (
    expiration TIMESTAMP(6) WITH TIME ZONE NOT NULL,
    id BIGSERIAL NOT NULL,
    email VARCHAR(255) NOT NULL,
    token VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Criação da tabela de roles
CREATE TABLE role (
    id BIGSERIAL NOT NULL,
    authority VARCHAR(255),
    PRIMARY KEY (id)
);

-- Criação da tabela de SLA
CREATE TABLE sla (
    response_time INTEGER,
    id BIGSERIAL NOT NULL,
    severity VARCHAR(255),
    PRIMARY KEY (id)
);

-- Criação da tabela de áreas de solução
CREATE TABLE solving_area (
    id BIGSERIAL NOT NULL,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

-- Criação da tabela de usuários
CREATE TABLE tb_user (
    blocked BOOLEAN,
    failed_login_attempts INTEGER,
    status_user SMALLINT CHECK (status_user BETWEEN 0 AND 1),
    created_at TIMESTAMP WITHOUT TIME ZONE,
    id BIGSERIAL NOT NULL,
    id_department BIGINT,
    solving_area_id BIGINT,
    update_at TIMESTAMP WITHOUT TIME ZONE,
    contact_number VARCHAR(255),
    created_by_user_name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    first_name VARCHAR(255),
    img_profile VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    PRIMARY KEY (id)
);

-- Criação da tabela de relacionamento entre usuários e roles
CREATE TABLE tb_user_role (
    role_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    PRIMARY KEY (role_id, user_id)
);

-- Criação da tabela de tickets
CREATE TABLE ticket (
    status_ticket SMALLINT CHECK (status_ticket BETWEEN 0 AND 4),
    category_ticket_id BIGINT,
    completion_date TIMESTAMP WITHOUT TIME ZONE,
    due_date TIMESTAMP WITHOUT TIME ZONE,
    id BIGSERIAL NOT NULL,
    parent_ticket_id BIGINT,
    registration_date TIMESTAMP WITHOUT TIME ZONE,
    requester_id BIGINT,
    resolver_id BIGINT,
    sla_id BIGINT,
    solving_area_id BIGINT,
    technician_id BIGINT,
    type_request_id BIGINT,
    description TEXT,
    subject TEXT,
    PRIMARY KEY (id)
);

-- Criação da tabela de histórico de tickets
CREATE TABLE ticket_history (
    annotation_public BOOLEAN NOT NULL,
    system_generated BOOLEAN NOT NULL,
    visible_to_requester BOOLEAN NOT NULL,
    id BIGSERIAL NOT NULL,
    registration_date TIMESTAMP(6) WITH TIME ZONE,
    ticket_id BIGINT NOT NULL,
    user_id BIGINT,
    description TEXT,
    note_type VARCHAR(255) CHECK (note_type IN ('COMMENT', 'STATUS_CHANGE', 'SYSTEM_GENERATED')),
    PRIMARY KEY (id)
);

-- Criação da tabela de tipos de solicitação
CREATE TABLE type_request (
    id BIGSERIAL NOT NULL,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

-- Definindo as chaves estrangeiras
ALTER TABLE IF EXISTS attachment ADD CONSTRAINT FKedqxly6v2mkdjt67ujfn47qh9 FOREIGN KEY (ticket_id) REFERENCES ticket;
ALTER TABLE IF EXISTS attachment ADD CONSTRAINT FKgvd405vgt3ere65g05wx07qx9 FOREIGN KEY (user_id) REFERENCES tb_user;
ALTER TABLE IF EXISTS category_ticket ADD CONSTRAINT FKawwnmpmn7pkvkgwha6i7hvtsw FOREIGN KEY (solving_area_id) REFERENCES solving_area;
ALTER TABLE IF EXISTS tb_user ADD CONSTRAINT FK1e6uj3wecxud4mcsy88g2oksv FOREIGN KEY (id_department) REFERENCES department;
ALTER TABLE IF EXISTS tb_user ADD CONSTRAINT FKpvjiqcmvc4oc8b98xy2f83vq5 FOREIGN KEY (solving_area_id) REFERENCES solving_area;
ALTER TABLE IF EXISTS tb_user_role ADD CONSTRAINT FKwei10c42xhnvb2150cg5ojwi FOREIGN KEY (role_id) REFERENCES role;
ALTER TABLE IF EXISTS tb_user_role ADD CONSTRAINT FK7vn3h53d0tqdimm8cp45gc0kl FOREIGN KEY (user_id) REFERENCES tb_user;
ALTER TABLE IF EXISTS ticket ADD CONSTRAINT FK13o6ux8ad7b7jk4o0dp1boybg FOREIGN KEY (category_ticket_id) REFERENCES category_ticket;
ALTER TABLE IF EXISTS ticket ADD CONSTRAINT FKgnxia1d2pbe5nw7tgd9fx8lns FOREIGN KEY (requester_id) REFERENCES tb_user;
ALTER TABLE IF EXISTS ticket ADD CONSTRAINT FKewcrxqxy80agn4p0fo9a8c5vu FOREIGN KEY (resolver_id) REFERENCES tb_user;
ALTER TABLE IF EXISTS ticket ADD CONSTRAINT FKbs3dq26cos6rtdnwpjw0w40ph FOREIGN KEY (sla_id) REFERENCES sla;
ALTER TABLE IF EXISTS ticket ADD CONSTRAINT FK77k27mp0kidvjusuybe06svrq FOREIGN KEY (solving_area_id) REFERENCES solving_area;
ALTER TABLE IF EXISTS ticket ADD CONSTRAINT FK13i6pjl4giv4p8ttx0c8oe97r FOREIGN KEY (technician_id) REFERENCES tb_user;
ALTER TABLE IF EXISTS ticket ADD CONSTRAINT FKda5rqg5s61sjtyubecrub1w8u FOREIGN KEY (type_request_id) REFERENCES type_request;
ALTER TABLE IF EXISTS ticket_history ADD CONSTRAINT FKn172ccrihn09prjnpoyxabcgw FOREIGN KEY (ticket_id) REFERENCES ticket;
ALTER TABLE IF EXISTS ticket_history ADD CONSTRAINT FKjg47v9t8ta6d7pjlht5x2kpc6 FOREIGN KEY (user_id) REFERENCES tb_user;
