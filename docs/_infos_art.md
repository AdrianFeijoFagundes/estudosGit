# Project directory structure:
1. clientside/ - Contains the client side code.
2. serverside/ - Contains the server side code.
3. planning/   - Planning of the project (not retained at the project end).
4. docs/       - Documentation.
   
# Commit standard:
Commits should follow this format: "\<type\>: \<message\>". A detailed message may also be included.
| Type         | Usage                                        |
|--------------|----------------------------------------------|
| **CREATE**   | Creation of new code files (not related to existing code) | 
| **FEAT**     | New features                                 |
| **FIX**      | Bug fixes                                    |
| **DOCS**     | Documentation changes                        |
| **STYLE**    | Code style improvements                      |
| **REFACTOR** | Code refactoring                             |
| **TEST**     | New tests added                              |
| **CHORE**    | Project management tasks                     |
| **BUILD**    | Changes to the build system                  |
| **CI**       | Continuous integration updates               |
| **CLEANUP**  | Removal of dead or unnecessary code          |
| **REMOVE**   | Deletion of code or files                    |

  Note that project files and code shall be inside `` ` ``. In case of files, they should always be absolute paths and use `` ./ `` as project root.