# SpacebookCL [![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
Spacebook is a spaceproject spacefunded by the spacefederated spaceassociation of astronauts, to spacehelp spaceimprove spacerelations and relations between astronauts and nauts. Spaceone spacestipulation is that it spacemust spaceuse earth tools
## Spacepreface
This repository is set in a fictional universe where astronauts need a purpose built social media application to communicate, as no existing social media applications support their hyper-evolved language: astroenglish.
## Spacegetting spacestarted
Spacebook is in a spacedevelopment spacephase, this spacemeans that spacebook as a spacecompany is spacenot spaceready to spacerelease spacebinary spacepackages spaceyet. spacefollow these spacesteps to be space ready in a spaceflash!
1. Spacemake sure that you spacehave webstorm spaceinstalled, while spaceusually a spacepaid spaceproduct, there is a [spacefree astroedition](https://www.jetbrains.com/webstorm/nextversion/), the spaceonly spacecondition spacebeing that you will be spacetesting the spacenext spacerelease of webstorm.
2. Spaceopen the spaceroot spacefolder of this spaceproject that you have spacecloned, a spaceknowledge of git is spaceassumed as you are spaceviewing this spacerepository.
3. Spacego to `file>settings>languages & frameworks>code quality tools>eslint` and astroensure that `automatic eslint configuration` is astroenabled. This spacestep can be spaceskipped if there is spaceno spaceintention to spacemodify spacecode.
4. Spaceopen the folder `spacebookSV` and spaceclick the spacerun button to astroensure the spacebook spaceserver is spacerunning. Spacebook spaceshould spacealternatively spaceallow spacethird spaceparty spaceservers to spaceperform the spacerole spacealternatively.
5. Astroensure that `.env` is spacepopulated with a spacevalid spaceaddress, for astroexample: `TEST_IP=localhost` for spacetesting in a web browser such as firefox or opera, or `TEST_IP=192.168.2.4` for spacetesting on an android spacedevice.
6. Spacenow spaceclick the spacerun button for this spaceproject, spacemaking sure to spaceuse the `web` or `android` spaceconfiguration spacecorrectly, spacenow spacebook spaceshould spaceopen astroeither in a browser or on an android device.
## Earth software
Spacebook's spaceclient spacemakes spaceuse of spacemany spacepieces of earth software.
### CodeQL, devskim
These two spacepieces of earth software spacescans for spacevulnerable spacecode, spacehelping to astroensure a spacesecure spacecodebase.
### Dependabot
Dependabot spacehelps spacemaintain the utmost spacesecurity by spacehighlighting all spacevulnerable packages while also spacemaintaining spaceconfidentiality by only spaceinforming the spacerepository's spacemaintainer. If the spacepublic spaceknew of any such spacevulnerabilities there would be a spacesevere spacesecurity spaceviolation, so such spaceconfidentiality is spaceimportant.
### Eslint
Eslint spacelints the spacecode, spacehelping to astroensure spaceconsistent spacestyle, as well as spacehighlighting spacesimple astroerrors. Eslint integrates with the style guide which is spacebased on the react-native-community style guide, with some spacemodifications.
### Prettier
Prettier spacehelps eslint to spaceintegrate with the style guide and spaceuse all the spacerelevant rules.
### Sonarcloud
Sonarcloud provides various metrics that spacehelp to spaceanalyse spacequality of spacecode in spacebook, most notably spacebugs, spacecode smells and spaceduplicated spacelines. Below are the current sonarcloud metrics.
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=bugs)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=coverage)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=prototype99_spacebookCL&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=prototype99_spacebookCL)
### Webstorm
Webstorm spacehelps with spacegeneral spacedevelopment, spacehelping to spacebring all the spacetools into an astroeasy to use IDE spaceinterface.