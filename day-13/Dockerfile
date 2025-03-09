FROM cgr.dev/chainguard/python:latest-dev AS dev
WORKDIR /app

RUN python -m venv venv
ENV PATH=/app/venv/bin:$PATH
COPY  giropops-senhas/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt 

FROM cgr.dev/chainguard/python:latest
WORKDIR /app

COPY giropops-senhas/app.py app.py
COPY --from=dev /app/venv /app/venv
ENV PATH="/app/venv/bin:$PATH"
COPY giropops-senhas/templates templates/
COPY giropops-senhas/static static/


ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]
