package com.Zenyoga.web.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import com.Zenyoga.web.constant.Api;

// import io.swagger.v3.oas.annotations.OpenAPIDefinition;
// import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
// import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
// import io.swagger.v3.oas.annotations.info.Contact;
// import io.swagger.v3.oas.annotations.info.Info;
// import io.swagger.v3.oas.annotations.info.License;
// import io.swagger.v3.oas.annotations.security.SecurityScheme;
// import io.swagger.v3.oas.annotations.servers.Server;
// import io.swagger.v3.oas.models.OpenAPI;
// import io.swagger.v3.oas.models.security.SecurityRequirement;

// @Configuration
// // @OpenAPIDefinition(info = @Info(contact = @Contact(name = "John Smith", email = "john.s@iamneo.ai", url = "https://some-url.com"), description = "This is open api documentation for e_commerce", title = "ECommerce", version = "1.0", license = @License(name = "MIT", url = "https://some-url.com"), termsOfService = "Terms of service"), servers = @Server(description = "DEV ENV", url = Api.DEFAULT))
// // @SecurityScheme(name = "bearerAuth", description = "JWT auth description", scheme = "bearer", type = SecuritySchemeType.HTTP, bearerFormat = "JWT", in = SecuritySchemeIn.HEADER)
// public class OpenApiConfig {
//     @Bean
//     public OpenAPI openAPI() {
//             return new OpenAPI()
//                             .info(new Info()
//                                             .title("Max Neo Quiz")
//                                             .description("This is a sample API documentation")
//                                             .version("1.0.0")
//                                             .contact(new Contact()
//                                                             .name("Max Neo")
//                                                             .email("max.neo.dev@gmail.com")
//                                                             .url("https://example.com"))
//                                             .license(new License()
//                                                             .name("Apache 2.0")
//                                                             .url("https://www.apache.org/licenses/LICENSE-2.0.html")))
//                             .servers(List.of(new Server().url("http://localhost:7777")))
//                             .addSecurityItem(new SecurityRequirement()
//                                             .addList("bearerAuth"))
//                             .components(new Components()
//                                             .addSecuritySchemes(
//                                                             "bearerAuth", new SecurityScheme()
//                                                                             .name("bearerAuth")
//                                                                             .type(HTTP)
//                                                                             .scheme("bearer")
//                                                                             .description("Provide the JWT token.\"")
//                                                                             .bearerFormat("JWT")));
//     }

// }

import static io.swagger.v3.oas.models.security.SecurityScheme.Type.HTTP;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {
            return new OpenAPI()
                            .info(new Info()
                                            .title("ZenYoga Admission")
                                            .description("This is a sample API documentation")
                                            .version("1.2.3")
                                            .contact(new Contact()
                                                            .name("Joan Grace Sunil")
                                                            .email("727821tucs104@skct.edu.in")
                                                            .url("https://example.com"))
                                            .license(new License()
                                                            .name("Apache 2.0")
                                                            .url("https://www.apache.org/licenses/LICENSE-2.0.html")))
                            .servers(List.of(new Server().url("http://localhost:7777")))
                            .addSecurityItem(new SecurityRequirement()
                                            .addList("bearerAuth"))
                            .components(new Components()
                                            .addSecuritySchemes(
                                                            "bearerAuth", new SecurityScheme()
                                                                            .name("bearerAuth")
                                                                            .type(HTTP)
                                                                            .scheme("bearer")
                                                                            .description("Provide the JWT token.\"")
                                                                            .bearerFormat("JWT")));
    }
}
