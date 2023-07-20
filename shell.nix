{ pkgs ? import <nixpkgs> {} }: 

pkgs.mkShell {

  buildInputs = with pkgs; [
    typescript
    nodePackages.typescript-language-server
  ];
  
}
