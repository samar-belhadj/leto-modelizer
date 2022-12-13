# Leto Modelizer (leto-modelizer)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=alert_status)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=reliability_rating)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=sqale_rating)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=security_rating)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=code_smells)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=bugs)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=vulnerabilities)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=sqale_index)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=ncloc)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=coverage)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ditrit_leto-modelizer&metric=duplicated_lines_density)](https://sonarcloud.io/summary/overall?id=ditrit_leto-modelizer)

[![](https://dcbadge.vercel.app/api/server/zkKfj9gj2C?style=flat&theme=default-inverted)](https://discord.gg/zkKfj9gj2C)


Technical topology low-code editing tool.

Leto modelizer is an application that can help you to generate infrastructure code without you to have written any code!
One of theirs principales qualities is that you can choose:


- which languages you can provide with this application

Or

- Implements your own plugin

Or

- Override existing plugins

If your company take care only of terraform files, you just have to install terraform before build this app and deploy it.

If you want only our own language component (maybe based on existing plugins), you can implement/override existing plugin.
And just install your plugin definition.

## How to install plugin

Make an `npm install` to let npm retrieve all dependencies and specially our cli to install easily your plugins 😉.

Then you just have to know two things about your plugins:
- it's name
- it's repository url

Let us show you how our cli works with TerraformPlugin:

run this command: `npm run plugin:install`

![](docs/plugin-install.png)

Options `repository-name` and `repository-url` can be added with the `npm run plugin:install` command to bypass cli prompts.

```bash
# Example with terraform plugin
npm run plugin:install -- repository-name="terrator-plugin" repository-url="https://github.com/ditrit/terrator-plugin.git#0.1.7"
```

Now your plugin is installed, you can continue to install other plugin with the same command if you want.

When you install all your wanted plugins, please run this commands `npm run plugin:init` to finalise all plugins' installation.

![](docs/plugin-init.png)

## How to build this app

### Native build

Once you have installed and initialized all yours plugins, run this commands to build the app:

```
npm run build
```

It will generate the built application in the `dist` folder.

### Docker build

To build this app with docker please use this command:
```bash
docker build . --build-arg proxy_url=http://localhost:9999 -t leto-modelizer
```

The argument `proxy_url` refers to `CORS_ISOMORPHIC_BASE_URL` to specify the proxy's address you want to use.

### Environment variable

`CORS_ISOMORPHIC_BASE_URL` is used to define the url of isomorphic-git cors proxy to allow cloning and pushing repos in the browser.
By default, the url is `https://cors.isomorphic-git.org`.

To override it :

```bash
CORS_ISOMORPHIC_BASE_URL="Something else" npm run build
```

## Official plugins

For now, we don't have much plugin to propose to you, but follow us and in the next (few) months you will see new plugins (like Jenkins or Kubernetes).

### Terraform plugin

Plugin to manage terraform files, by default it come from with aws provider definition.

[GitHub url](https://github.com/ditrit/terrator-plugin)

Option to use it in command `install`:

- plugin name: `terrator-plugin`
- repository url: `https://github.com/ditrit/terrator-plugin.git#0.1.7`



