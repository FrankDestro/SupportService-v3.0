FROM openjdk:17-jdk-alpine

LABEL name="Support Service"
LABEL description="API - Support Service Management Tickets"
LABEL maintainer="frank-destro@outlook.com"

RUN addgroup -S supportService-group && adduser -S supportService-user -G supportService-group

USER supportService-user:supportService-group

ADD ./target/supportService-SNAPSHOT.jar supportService.jar

ENTRYPOINT ["java", "-Xms128m", "-Xmx256m", "-XX:MetaspaceSize=64m", "-XX:MaxMetaspaceSize=128m", "-jar", "supportService.jar"]

EXPOSE 8081
