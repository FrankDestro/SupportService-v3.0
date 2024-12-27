FROM amazoncorretto:21-alpine

LABEL name="Support Service"
LABEL description="API - Support Service Management Tickets"
LABEL maintainer="frank-destro@outlook.com"

RUN addgroup -S supportService-group && adduser -S supportService-user -G supportService-group

USER supportService-user:supportService-group

# ADD ./target/ServiceHelp-0.0.1-SNAPSHOT.jar supportService.jar

ENV JAVA_HOME=/usr/lib/jvm/java-21-amazon-corretto
ENV PATH=$JAVA_HOME/bin:$PATH

# ENTRYPOINT ["java", "-Xms128m", "-Xmx256m", "-XX:MetaspaceSize=64m", "-XX:MaxMetaspaceSize=128m", "-jar", "supportService.jar"]

EXPOSE 8081
